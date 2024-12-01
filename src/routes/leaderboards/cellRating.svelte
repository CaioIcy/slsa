<script lang="ts">
  import { onMount } from 'svelte';
  import RankIcon from '$lib/rankIcon.svelte';

  export let data = {};
  export let code;

  let loaded = false;
  const MIN_RANK_SETS = 5;

  const setCount = (player) => {
    return (player.rankedNetplayProfile?.wins ?? 0) + (player.rankedNetplayProfile?.losses ?? 0);
  };

  interface Rank {
    isRank(player): boolean;
    ic: string;
    name: string;
  }

  class NoneRank implements Rank {
    public ic = 'PN'; // TODO fix
    public name = 'None';

    isRank(player) {
      return setCount(player) <= 0;
    }
  }

  class PendingRank implements Rank {
    public ic = 'PN';
    public name = 'Pending';

    isRank(player) {
      const totalSets = setCount(player);
      return 0 < totalSets && totalSets < MIN_RANK_SETS;
    }
  }

  class StandardRank implements Rank {
    constructor(
      public ic: string,
      public name: string,
      private lowerBound: number,
      private upperBound: number
    ) {}

    isRank(player) {
      if (setCount(player) < MIN_RANK_SETS) {
        return false;
      }
      const rating = Math.floor(100 * player.rankedNetplayProfile.ratingOrdinal) / 100;
      return this.lowerBound <= rating && rating <= this.upperBound;
    }
  }

  class GrandMaster extends StandardRank {
    constructor() {
      super('GM', 'Grandmaster', 2191.75, Infinity);
    }

    isRank(player) {
      const hasRating = super.isRank(player);
      if (!hasRating) {
        return false;
      }
      return (
        player.rankedNetplayProfile.dailyGlobalPlacement !== null ||
        player.rankedNetplayProfile.dailyRegionalPlacement !== null
      );
    }
  }

  function getRank(account) {
    for (let i = RANKS.length - 1; i >= 0; i--) {
      if (RANKS[i].isRank(account)) {
        return RANKS[i];
      }
    }
    return new NoneRank();
  }

  export const RANKS = [
    new PendingRank(),
    new StandardRank('B1', 'Bronze I', 0, 765.42),
    new StandardRank('B2', 'Bronze II', 765.43, 913.71),
    new StandardRank('B3', 'Bronze III', 913.72, 1054.86),
    new StandardRank('S1', 'Silver I', 1054.87, 1188.87),
    new StandardRank('S2', 'Silver II', 1188.88, 1315.74),
    new StandardRank('S3', 'Silver III', 1315.75, 1435.47),
    new StandardRank('G1', 'Gold I', 1435.48, 1548.06),
    new StandardRank('G2', 'Gold II', 1548.07, 1653.51),
    new StandardRank('G3', 'Gold III', 1653.52, 1751.82),
    new StandardRank('P1', 'Platinum I', 1751.83, 1842.99),
    new StandardRank('P2', 'Platinum II', 1843, 1927.02),
    new StandardRank('P3', 'Platinum III', 1927.03, 2003.91),
    new StandardRank('D1', 'Diamond I', 2003.92, 2073.66),
    new StandardRank('D2', 'Diamond II', 2073.67, 2136.27),
    new StandardRank('D3', 'Diamond III', 2136.28, 2191.74),
    new StandardRank('M1', 'Master I', 2191.75, 2274.99),
    new StandardRank('M2', 'Master II', 2275, 2350),
    new StandardRank('M3', 'Master III', 2350, Infinity),
    new GrandMaster()
  ];

  let diffElo = 0;
  onMount(async () => {
    loaded = true;
    diffElo = Math.floor(data.db.fGetAccountByCode(code).diff.elo);
  });
</script>

<div class="flex flex-row items-center">
  <div class="">
    {#if loaded}
      <RankIcon key={getRank(data.db.fGetAccountByCode(code).account).ic} />
    {:else}
      <div class="rank-icon-placeholder"></div>
    {/if}
  </div>

  <div class="flex flex-col items-start ml-2">
    <div class="flex flex-row items-center">
      <p class="text-lg font-bold">
        {Math.floor(data.db.fGetAccountByCode(code).account.rankedNetplayProfile.ratingOrdinal)}
      </p>

      {#if loaded && diffElo != 0 && !data.db.fGetAccountByCode(code).diff.isNew}
        {#if diffElo > 0}
          <p class="font-medium ml-2 text-green">+{diffElo}</p>
        {:else}
          <p class="font-medium ml-2 text-red">{diffElo}</p>
        {/if}
      {/if}
    </div>

    <p class="font-normal text-sm text-primary-light">
      {getRank(data.db.fGetAccountByCode(code).account).name?.toUpperCase()}
    </p>
  </div>
</div>

<style lang="postcss">
  .rank-icon-placeholder {
    max-width: 36px;
    max-height: 36px;
    width: 36px;
    height: 36px;
    background-color: theme(colors.gray);
    border-radius: 8px;
    border-size: 4px;
  }
</style>
