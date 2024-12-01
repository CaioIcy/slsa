<script lang="ts">
  import { onMount } from 'svelte';

  export let slippi = {};
  export let localRank = 0;

  let loaded = false;
  onMount(async () => {
    loaded = true;
  });
</script>

<div>
  <p class="text-xl font-bold">
    {localRank}
  </p>

  {#if slippi.diff.isNew}
    <div class="flex flex-row justify-center items-center">
      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="rgb(242, 201, 76)">
        <path
          d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"
        ></path>
      </svg>

      <p class="text-sm text-yellow font-bold ml-1">NEW!</p>
    </div>
  {:else if slippi.diff.rank != 0 && slippi.diff.elo != 0}
    <div>
      <p
        class="text-sm font-bold"
        class:rankDown={slippi.diff.rank < 0}
        class:rankUp={slippi.diff.rank > 0}
      >
        {Math.abs(slippi.diff.rank)}
      </p>
    </div>
  {/if}
</div>

<style>
  .rankDown {
    @apply text-red;
  }
  .rankDown:before {
    content: '▼ ';
    font-size: 10px;
  }

  .rankUp {
    @apply text-green;
  }
  .rankUp:before {
    content: '▲ ';
    font-size: 10px;
  }

  svg {
    max-width: 18px;
    max-height: 18px;
    width: auto;
    height: auto;
  }
</style>
