<script lang="ts">
  import { onMount } from 'svelte';
  import CharacterStock from '$lib/characterStock.svelte';

  export let data = {};
  export let code = '';

  let loaded = false;
  const condensedSize = 3;
  let totalGames = 1;
  let allCharacters = [];
  let characters = [];

  function progressFill(character) {
    const maxx = 283.0;
    const charGames = data.db.codeMap[code].account.rankedNetplayProfile.characters.find(
      (c) => c.character === character
    ).gameCount;
    return (charGames * 283.0) / totalGames;
  }

  function characterPercentage(character) {
    const charGames = data.db.codeMap[code].account.rankedNetplayProfile.characters.find(
      (c) => c.character === character
    ).gameCount;
    const percentage = 100 * (charGames / totalGames);
    return Number(percentage.toFixed(1));
  }

  function humanizedCharacter(character) {
    return character
      .toLowerCase()
      .split('_')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ');
  }

  onMount(async () => {
    totalGames = data.db.codeMap[code].account.rankedNetplayProfile.characters.reduce(
      (acc, val) => acc + val.gameCount,
      0
    );
    allCharacters = (data.db.codeMap[code].account.rankedNetplayProfile.characters || []).sort(
      (a, b) => b.gameCount - a.gameCount
    );
    characters = allCharacters.slice(0, condensedSize);
    loaded = true;
  });
</script>

<div class="flex flex-row items-center align-center justify-start">
  {#if !loaded}
    <div class="flex sized-48 items-center justify-center">
      <div class="sized-40 m-4 flex items-center justify-center">
        <svg
          class="absolute z-10 sized-40 progress"
          viewBox="0 0 100 100"
          transform="scale(-1, 1) rotate(-90)"
        >
          <circle class="progress-background" cx="50" cy="50" r="45"></circle>
        </svg>
      </div>
    </div>
    <div class="flex sized-48 items-center justify-center">
      <div class="sized-40 m-4 flex items-center justify-center">
        <svg
          class="absolute z-10 sized-40 progress"
          viewBox="0 0 100 100"
          transform="scale(-1, 1) rotate(-90)"
        >
          <circle class="progress-background-placeholder" cx="50" cy="50" r="45"></circle>
        </svg>
      </div>
    </div>
    <div class="flex sized-48 items-center justify-center">
      <div class="sized-40 m-4 flex items-center justify-center">
        <svg
          class="absolute z-10 sized-40 progress"
          viewBox="0 0 100 100"
          transform="scale(-1, 1) rotate(-90)"
        >
          <circle class="progress-background-placeholder" cx="50" cy="50" r="45"></circle>
        </svg>
      </div>
    </div>
    <div class="flex sized-48 items-center justify-center">
      <div class="sized-40 m-4 flex items-center justify-center">
        <svg
          class="absolute z-10 sized-40 progress"
          viewBox="0 0 100 100"
          transform="scale(-1, 1) rotate(-90)"
        >
          <circle class="progress-background-placeholder" cx="50" cy="50" r="45"></circle>
        </svg>
      </div>
    </div>
  {/if}

  {#each characters as character (character.character)}
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
            stroke-dasharray="{progressFill(character.character)} 283"
          ></circle>
        </svg>

        <div class="z-20 w-max h-max">
          <CharacterStock character={character.character} />
        </div>

        <span
          class="tooltip rounded shadow-lg p-1 bg-primary-contrastText text-primary-dark mt-[64px] text-xs"
        >
          {humanizedCharacter(character.character)} ({characterPercentage(character.character)}%)
        </span>
      </div>
    </div>
  {/each}

  {#if allCharacters.length > condensedSize}
    <div class="flex sized-48 items-center justify-center">
      <div class="sized-40 m-4 flex items-center justify-center">
        <div
          class="flex flex-col sized-40 items-center text-primary-light more-chars align-center justify-center leading-tight"
        >
          <p class="text-[10px]">+ {allCharacters.length - condensedSize}</p>
          <p class="text-[10px]">more</p>
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  .tooltip {
    @apply invisible absolute;
  }

  .has-tooltip:hover .tooltip {
    @apply visible z-50;
  }

  .more-chars {
    border-bottom-color: rgba(94, 96, 102, 0.498);
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 36px;
    border-bottom-style: dashed;
    border-bottom-width: 2px;
    border-collapse: collapse;
    border-left-color: rgba(94, 96, 102, 0.498);
    border-left-style: dashed;
    border-left-width: 2px;
    border-right-color: rgba(94, 96, 102, 0.498);
    border-right-style: dashed;
    border-right-width: 2px;
    border-spacing: 0px 0px;
    border-top-color: rgba(94, 96, 102, 0.498);
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;
    border-top-style: dashed;
    border-top-width: 2px;
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

  .progress-background-placeholder {
    fill: none;
    stroke: theme(colors.primary.main);
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
