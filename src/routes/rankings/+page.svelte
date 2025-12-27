<script lang="ts">
  import { onMount } from 'svelte';
  import { getSortedRankings } from '$lib/data/rankings.ts';
  import Flag from '$lib/flag.svelte';
  import CharacterStock from '$lib/characterStock.svelte';

  export let data = {};

  const getRankingFlag = (ranking) => {
    return ranking.flag || ranking.tag.toLowerCase();
  };

  const getPlayerFlagBySlug = (slug) => {
    return data.db.fGetPlayerBySlug(slug)?.countryCode;
  };

  const showPlayerFlag = (ranking, player) => {
    const rankingFlag = getRankingFlag(ranking);
    const playerFlag = getPlayerFlagBySlug(player.player);
    return rankingFlag.toLowerCase() !== playerFlag;
  };

  let loaded = false;
  onMount(async () => {
    loaded = true;
  });
</script>

<section class="grid grid-cols-1 w-full min-w-[1024px] max-w-[1024px] my-8">
  <h1 class="text-4xl font-medium mb-8">Rankings</h1>

  {#each getSortedRankings() as ranking}
    <div class="bg-primary-main w-inherit mb-12 rounded">
      <!-- Title -->
      <div class="flex flex-row w-full h-9 items-center bg-purple">
        <Flag width={48} country={getRankingFlag(ranking)} />
        <p class="text-lg font-bold ml-3">{ranking.year}</p>
        <p class="text-lg font-bold">&nbsp;• {ranking.title}</p>
        {#if !!ranking.subtitle}
          <p class="text-md font-thin">, {ranking.subtitle}</p>
        {/if}
      </div>

      <!-- Players -->
      <div class="grid grid-cols-5 p-2 max-h-[436px] border-y border-primary-dark">
        {#each ranking.players.sort((a, b) => b.rank - a.rank) as player}
          <!-- Player -->
          <div
            class="flex flex-row justify-between items-center align-middle h-10 m-1 min-w-[196px] h-[36px] bg-[#ffffff14] rounded grid-flow-col"
          >
            <!-- HM / Rank -->
            <div
              class="flex flex-col justify-center items-center h-full min-w-[28px] bg-slsa-light"
            >
              <p class="text-center text-sm font-semibold">
                {player.hm ? 'HM' : player.rank}
              </p>
            </div>

            <div class="flex flex-col justify-evenly w-full px-2 leading-[1.25]">
              <div class="flex flex-row justify-start items-center">
                <p class="font-bold">{data.db.fGetPlayerBySlug(player.player)?.tag || `UNKNOWN (${player.player})` }</p>
              </div>

              <div class="flex flex-row justify-start items-center">
                <p class="text-xs text-primary-light">
                  {data.db.fGetPlayerBySlug(player.player)?.slippiConnectCodes?.slice(0, 1) || ''}
                </p>
              </div>
              <!-- {#if showPlayerFlag(ranking, player)}
                <Flag width={12} country={getPlayerFlagBySlug(player.player)} />
              {/if} -->
            </div>

            <!-- Characters -->
            <div class="flex flex-col items-center justify-center h-full min-w-[20px] m-[2px]">
              {#if player.characters?.length > 0}
                {#if loaded}
                  <CharacterStock size="18" character={player.characters[0]} />
                {:else}
                  <div class="stock-placeholder-18"></div>
                {/if}
              {/if}

              <!-- {#if player.characters?.length > 1}
                <div class="flex flex-row items-center justify-center h-full min-w-[28px]">
                  {#each player.characters.slice(1, 3) as character}
                    <CharacterStock size=12 character={character} />
                  {/each}
                </div>
              {/if} -->
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>

<style lang="postcss">
  .stock-placeholder-18 {
    max-width: 18px;
    max-height: 18px;
    width: 18px;
    height: 18px;
    background-color: theme(colors.gray);
    border-radius: 2px;
    border-size: 4px;
  }
</style>
