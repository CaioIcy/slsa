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
cp -f ./data/slippi-new.json ./data/slippi-old.json
cp -f ./local/ranked/.ranked-slippi.json ./data/slippi-new.json

npx vite-node --script bin/bake.ts

pnpm run build

if [ "${CI}" = "true" ]; then
  git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
  npx gh-pages -d build -t true -u "github-actions-bot <support+actions@github.com>"

  git add data/slippi*
  git commit --author "github-actions-bot <support+actions@github.com>" -m "[bot] update slippi data"
  git push origin main
fi
