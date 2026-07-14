#!/bin/bash
set -eo pipefail

# skip if not ranked day, unless manually triggered via workflow_dispatch
if [[ "${GITHUB_EVENT_NAME}" != "workflow_dispatch" ]]; then
  set +e
  npx vite-node --script bin/is-ranked-day.ts
  exit_code=$?
  [[ $exit_code == 42 ]] && exit 0
  set -e
fi

mkdir -p ./local/ranked/
npx vite-node --script bin/fetch-slippi.ts

# old prebuild.ts
# Baseline is the last data committed before the current ranked day opened, so the
# deltas bake.ts computes read as "what changed during this ranked day". Anchoring
# to the window start rather than a fixed age (ranked days are 24h out of every 96h)
# keeps the baseline identical for every run of the day, and doesn't drift when the
# GitHub cron fires late or a workflow_dispatch commits data between ranked days.
window_start=$(npx vite-node --script bin/ranked-window-start.ts)

# An empty rev here would silently degrade to `git show :<path>` (the index),
# writing the current data as "old" and reducing the diff window to one run.
old_commit=$(git rev-list -n 1 --before="${window_start}" HEAD)
if [[ -z "$old_commit" ]]; then
  echo "no commit older than ${window_start}; checkout is too shallow (see fetch-depth in run.yml)" >&2
  exit 1
fi

rm -f ./data/slippi-old.json
git show "$old_commit:./data/slippi-new.json" > ./data/slippi-old.json
cp -f ./local/ranked/.ranked-slippi.json ./data/slippi-new.json

npx vite-node --script bin/bake.ts

pnpm run build

if [ "${CI}" = "true" ]; then
  git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
  pnpm run ci:deploy

  git config --global user.name "github-actions-bot"
  git config --global user.email "support+actions@github.com"
  git add data/slippi*
  if ! git diff --staged --quiet; then
    git commit -m "[bot] update slippi data"
    git push origin main
  fi
fi
