<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { findPlayer } from '$lib/data/players.ts';
  import CellPlayer from '../leaderboards/cellPlayer.svelte';
  import CellRating from '../leaderboards/cellRating.svelte';
  import CellSets from '../leaderboards/cellSets.svelte';
  import CellRank from '../leaderboards/cellRank.svelte';
  import CellCharacters from '../leaderboards/cellCharacters.svelte';
  import { getRankingsByCode } from '$lib/data/rankings.ts';
  import Flag from '$lib/flag.svelte';
  import CharacterStock from '$lib/characterStock.svelte';

  function getSearchCode(): string {
    const randomLeaderboardEntry = data.db.leaderboard[Math.floor(Math.random() * data.db.leaderboard.length)];
    return queryCode?.toUpperCase()?.replace('-', '#') || (process.env.NODE_ENV === 'production' ? 'CANH#641' : randomLeaderboardEntry);
  }

  function getPlayerCode(): string{
    return player?.slippiConnectCodes[0] || playerSlippi?.account?.connectCode?.code || searchValue;
  }

  export let data: any = {};
  let loaded = false;
  let queryCode: string | undefined = 'caio-157';
  let searchValue;
  let player;
  let playerSlippi;
  onMount(() => {
    loaded = true;
    queryCode = $page?.url?.searchParams.get('code')?.toLowerCase();
    searchValue = getSearchCode()?.replace('-', '#');
    player = findPlayer(searchValue);
    playerSlippi = data.db.codeMap[getPlayerCode()];
  });
</script>

<section class="grid grid-cols-3 gap-2 w-full min-w-[1024px] max-w-[1024px] my-8 min-h-[192px]">
  {#if loaded && (player || playerSlippi)}
    <div id="player" class="flex flex-col bg-primary-main p-2">
      <h2 class="text-xl font-bold mb-4">Player Info</h2>

      <div class="w-full h-full">
        <CellPlayer {data} code={getPlayerCode()} />
        {#if (player?.slippiConnectCodes?.length ?? 0) > 1}
          <p class="text-primary-light text-sm">{player?.slippiConnectCodes.slice(1).join(', ')}</p>
        {/if}
  
        {#if player?.subregion && player?.subregion !== player?.countryCode}
          <div class="flex flex-row gap-2 items-center mt-4">
            <p>Region: {(player?.subregion || player?.countryCode || "unknown")?.toUpperCase()}</p>
            <Flag country={player?.subregion || player?.countryCode || "unknown"} />
          </div>
        {/if}
      </div>
    </div>

    <div id="ranked" class="flex flex-col bg-primary-main p-2">
      <h2 class="text-xl font-bold mb-4">Slippi Ranked</h2>
      {#if playerSlippi}
      <div class="flex flex-row gap-8 items-center justify-center">
        <CellRank slippi={playerSlippi} localRank={data.db.leaderboard.indexOf(getPlayerCode()) + 1} />
        <CellRating {data} code={getPlayerCode()} />
        <CellSets
        wins={playerSlippi.account?.rankedNetplayProfile?.wins ?? 0}
        losses={playerSlippi.account?.rankedNetplayProfile?.losses ?? 0}
        />
      </div>
      <div class="flex flex-row gap-8 items-center justify-center mt-2">
        <CellCharacters {data} code={getPlayerCode()} />
      </div>
      <p class="text-primary-light text-sm mt-2">Display name: {playerSlippi?.account?.displayName}</p>
      {:else}
        <p class="text-primary-light text-xs">No Slippi data found</p>
      {/if}
    </div>

    <div id="prs" class="flex flex-col bg-primary-main p-2">
      <h2 class="text-xl font-bold">Rankings</h2>
      {#each getRankingsByCode(data, getPlayerCode()) as ranking}
        <div class="flex flex-col">
          <div class="flex flex-row gap-1">
            <p>{ranking.year}</p>
            <Flag country={ranking.flag} />
            <p>{ranking.tag} {ranking.rank}</p>
            {#if ranking.characters?.length > 0}
              <CharacterStock size=18 character={ranking.characters[0]} />
            {/if}
          </div>
        </div>
      {:else}
        <p class="text-primary-light text-xs">No PRs found</p>
      {/each}
    </div>
  {:else}
    <div></div>
    <h1 class="text-2xl font-bold">
      {#if loaded}
        Player not found: {searchValue}
      {:else}
        Loading...
      {/if}
    </h1>
    <div></div>
  {/if}
</section>

<style>
</style>
