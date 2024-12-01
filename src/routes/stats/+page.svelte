<script lang="ts">
  import { onMount } from 'svelte';
  import Flag from '$lib/flag.svelte';
  import CharacterStock from '$lib/characterStock.svelte';

  export let data = {};

  let countries = [];
  let characters = [];

  let totalSets = 0;
  let totalGames = 1;
  let correctness = 0;

  function progressFill(characterGameCount) {
    const maxx = 283.0;
    return (characterGameCount * 283.0) / totalGames;
  }

  function humanizedCharacter(character) {
    return character
      .toLowerCase()
      .split('_')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ');
  }

  let loaded = false;
  onMount(async () => {
    let wins = 0;
    let losses = 0;

    const countryHistogram = {};
    const charHist = {};
    for (const code of data.db.leaderboard) {
      const slug = data.db.codeMap[code].slug;
      const country = data.db.slugMap[slug]?.countryCode || 'xx';
      if (!(country in countryHistogram)) {
        countryHistogram[country] = 0;
      }
      countryHistogram[country] += 1;

      const account = data.db.codeMap[code].account;
      for (const character of account.rankedNetplayProfile.characters) {
        if (!(character.character in charHist)) {
          charHist[character.character] = 0;
        }
        charHist[character.character] += character.gameCount;
        totalGames += character.gameCount;
      }

      totalSets += account.rankedNetplayProfile.wins + account.rankedNetplayProfile.losses;
      wins += account.rankedNetplayProfile.wins;
      losses += account.rankedNetplayProfile.losses;
    }
    const sortableCountries = [];
    for (const [k, v] of Object.entries(countryHistogram)) {
      if (k == 'xx') {
        continue;
      }
      sortableCountries.push([k, v]);
    }
    sortableCountries.sort((c1, c2) => {
      return c2[1] - c1[1];
    });
    if ('xx' in countryHistogram) {
      sortableCountries.push(['xx', countryHistogram['xx']]);
    }
    countries = sortableCountries;

    // characters
    const sortableCharacters = [];
    for (const [k, v] of Object.entries(charHist)) {
      sortableCharacters.push([k, v]);
    }
    sortableCharacters.sort((c1, c2) => {
      return c2[1] - c1[1];
    });
    characters = sortableCharacters;

    correctness = 100.0 - 100.0 * (Math.abs(wins - losses) / Math.max(wins, losses));

    loaded = true;
  });
</script>

<section class="grid grid-cols-1 w-full min-w-[1024px] max-w-[1024px] my-8">
  <h1 class="text-4xl font-medium mb-2">Stats</h1>

  <div class="flex flex-row bg-primary-main justify-evenly my-2">
    <p>
      Sets: {totalSets}
    </p>

    <p>
      Games: {totalGames}
    </p>

    {#if loaded && process.env.NODE_ENV !== 'production'}
      <p>
        OK: {correctness.toFixed(2)}%
      </p>
    {/if}
  </div>

  <!-- Countries -->
  <div class="grid grid-cols-6 bg-primary-main my-2 place-items-center">
    {#each countries as country}
      <div class="flex flex-col items-center mx-1 my-4">
        <Flag width={48} country={country[0]} />
        <p class="text-lg">{country[1]}</p>
      </div>
    {/each}
  </div>

  <!-- Characters -->
  <div class="grid grid-cols-7 bg-primary-main my-2 place-items-center">
    {#each characters as character}
      <div class="flex sized-48 items-center justify-center">
        <div class="sized-40 m-4 flex items-center justify-center has-tooltip">
          <svg
            class="absolute z-10 sized-40 progress"
            viewBox="0 0 100 100"
            transform="scale(-1, 1) rotate(-90)"
          >
            <circle class="progress-background" cx="50" cy="50" r="45"></circle>
            <circle
              class="progress-bar"
              cx="50"
              cy="50"
              r="45"
              stroke-dasharray="{progressFill(character[1])} 283"
            ></circle>
          </svg>

          <div class="z-20 w-max h-max">
            <CharacterStock character={character[0]} />
          </div>

          <span
            class="tooltip rounded shadow-lg p-1 bg-primary-contrastText text-primary-dark mt-[64px] text-xs"
          >
            {humanizedCharacter(character[0])} ({Number(
              ((100 * character[1]) / totalGames).toFixed(1)
            )}%)
          </span>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="postcss">
  .tooltip {
    @apply invisible absolute;
  }

  .has-tooltip:hover .tooltip {
    @apply visible z-50;
  }

  .sized-48 {
    @apply min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] w-[48px] h-[48px];
  }

  .sized-40 {
    @apply min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] w-[40px] h-[40px];
  }

  .progress-background {
    fill: none;
    stroke: theme(colors.gray);
    stroke-width: 12;
  }

  .progress-bar {
    fill: none;
    stroke: theme(colors.green);
    stroke-width: 12;
    stroke-linecap: butt;
    transform-origin: center;
  }
</style>
