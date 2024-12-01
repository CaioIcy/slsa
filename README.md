# SLSA

> :frog: SSBM+Slippi hub for South America, including Ranked Leaderboards & PRs.

[caioicy.github.io/slsa](https://caioicy.github.io/slsa)

Successor for [slippi-leaderboard-sa](https://github.com/CaioIcy/slippi-leaderboard-sa), but built by me with just SvelteKit & Tailwind CSS.

## Developing

```bash
$ pnpm run install
$ pnpm run dev -- --open
$ pnpm run preview
$ pnpm run build
```

### Misc

```bash
$ bin/fetch-slippi.ts && bin/prebuild.ts && bin/bake.ts && pnpm run deploy

$ svgo -f assets/ranks/ -o src/lib/assets/img/ranks/

$ brew install pngquant oxipng
$ rm assets/stocks/*fs8.png
$ rm src/lib/assets/img/stocks/*.png
$ pngquant -s2 --quality=7-50 assets/stocks/*.png
$ echo $?
$ oxipng -o max --strip safe --alpha assets/stocks/*-fs8.png
$ mv assets/stocks/*-fs8.png src/lib/assets/img/stocks
$ npx --yes convert-svg-to-png src/lib/assets/img/ranks/*.svg

$ find -E src/lib/assets/img/stocks -type f -not -iregex '.*[A-Z]_DEFAULT-fs8.png' #-delete
```
