#!/bin/bash
set -euo pipefail

mkdir -p ./local/ranked/
npx vite-node --script bin/fetch-slippi.ts

# old prebuild.ts
rm -f ./data/slippi-old.json
cp -f ./data/slippi-new.json ./data/slippi-old.json
cp -f ./local/ranked/.ranked-slippi.json ./data/slippi-new.json

npx vite-node --script bin/bake.ts

pnpm run build

git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
npx gh-pages -d build -t true -u "github-actions-bot <support+actions@github.com>"
