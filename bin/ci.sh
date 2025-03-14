#!/bin/bash
set -eo pipefail

# skip if not ranked day
set +e
npx vite-node --script bin/is-ranked-day.ts
exit_code=$?
[[ $exit_code == 42 ]] && exit 0
set -e

mkdir -p ./local/ranked/
npx vite-node --script bin/fetch-slippi.ts

# old prebuild.ts
rm -f ./data/slippi-old.json
git show $(git rev-list -n 1 --before="72 hours ago" HEAD):./data/slippi-new.json > ./data/slippi-old.json
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
