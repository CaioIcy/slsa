<script lang="ts">
  import { onMount } from 'svelte';
  import Flag from '$lib/flag.svelte';
  import { findLatestRankByCode } from '$lib/data/rankings.ts';

  export let data = {};
  export let code: string = '';

  let rankData = null;

  const getFlagCountryByCode = (code: string): string => {
    return data.db.fGetPlayerByCode(code)?.countryCode;
  };

  const getDisplayName = (code: string): string => {
    const player = data.db.fGetPlayerByCode(code);
    if (player?.tag) {
      return player.tag;
    }

    return data.db.fGetAccountByCode(code)?.account?.displayName || 'ABCDWXYZ_ABCDWXYZ';
  };

  onMount(async () => {
    rankData = findLatestRankByCode(data, code);
  });
</script>

<div class="flex flex-row items-center justify-start">
  <div class="flex flex-col justify-start">
    <div class="flex flex-row items-center justify-start">
      {#if !!getFlagCountryByCode(code)}
        <div class="ml-[1px] mr-2">
          <Flag country={getFlagCountryByCode(code)} />
        </div>
      {/if}
      <p class="text-lg font-medium">{getDisplayName(code)}</p>
    </div>

    <div class="flex flex-row items-center justify-start">
      <p class="font-normal text-sm text-primary-light">{code}</p>
      {#if !!rankData}
        <p class="font-normal text-sm text-primary-light">&nbsp;• {rankData}</p>
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
</style>
