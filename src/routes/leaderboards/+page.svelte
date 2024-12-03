<script lang="ts">
  import { onMount } from 'svelte';
  import { formatDuration, intervalToDuration } from 'date-fns';
  import { shortEnLocale } from '$lib/time';

  import CellRank from './cellRank.svelte';
  import CellPlayer from './cellPlayer.svelte';
  import CellRating from './cellRating.svelte';
  import CellCharacters from './cellCharacters.svelte';
  import CellSets from './cellSets.svelte';

  export let data;

  // time
  const timeSince = (date: number): string => {
    let seconds = Math.floor((Date.now() - date) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
      const flooredInterval = Math.floor(interval);
      return flooredInterval + ` year${flooredInterval > 1 ? 's' : ''}`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      const flooredInterval = Math.floor(interval);
      return flooredInterval + ` month${flooredInterval > 1 ? 's' : ''}`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
      const flooredInterval = Math.floor(interval);
      return flooredInterval + ` day${flooredInterval > 1 ? 's' : ''}`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
      const flooredInterval = Math.floor(interval);
      return flooredInterval + ` hour${flooredInterval > 1 ? 's' : ''}`;
    }
    interval = seconds / 60;
    if (interval > 1) {
      const flooredInterval = Math.floor(interval);
      return flooredInterval + ` minute${flooredInterval > 1 ? 's' : ''}`;
    }
    return Math.floor(seconds) + ' seconds';
  };

  // ToggleButtonGroup
  const SUBREGION_ALL = 0;
  const SUBREGION_BRAZIL = 1;
  const SUBREGION_CHILE = 2;
  const SUBREGION_OTHER = 3;

  let loaded = false;
  let selectedRegion = SUBREGION_ALL;
  function toggle(id: number): void {
    selectedRegion = id;
  }
  const subRegionMap = {};

  const shouldShowPlayer = (region, code) => {
    // All
    if (region === SUBREGION_ALL) {
      return true;
    }

    // Brazil
    const player = data.db.fGetPlayerByCode(code);
    if (region === SUBREGION_BRAZIL && player) {
      return player.subregion === 'br';
    }

    // Chile
    if (region === SUBREGION_CHILE && player) {
      return player.subregion === 'cl';
    }

    // Other
    if (region === SUBREGION_OTHER) {
      return !player || !['cl', 'br'].includes(player.subregion);
    }

    return false;
  };

  // SLP launcher
  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  const FREE_ACCESS_START_AT = new Date(Date.UTC(2024, 3, 15, 14, 0, 0));
  const FREE_ACCESS_OFFSET_FROM = new Date(Date.UTC(2024, 3, 15, 8, 0, 0));

  let slpIsFullAccess = false;
  let slpCountdown = 'a while';
  let slpNextTime = new Date();

  const getFullAccessTimes = (
    now: Date
  ): { isActive: boolean; nextStartTime: Date; nextEndTime: Date } => {
    const startTime = FREE_ACCESS_START_AT;
    const offsetTime = FREE_ACCESS_OFFSET_FROM;
    if (now < startTime) {
      return {
        isActive: false,
        nextStartTime: startTime,
        nextEndTime: new Date(offsetTime.getTime() + MS_PER_DAY)
      };
    }

    const daysSinceStart = Math.floor((now.getTime() - offsetTime.getTime()) / MS_PER_DAY);
    let daysUntilNextRankedDay = 4 - (daysSinceStart % 4);
    if (daysUntilNextRankedDay === 4) {
      daysUntilNextRankedDay = 0;
    }
    const nextRankedDayTime = new Date(
      offsetTime.getTime() + (daysSinceStart + daysUntilNextRankedDay) * MS_PER_DAY
    );

    return {
      isActive: daysUntilNextRankedDay === 0,
      nextStartTime: nextRankedDayTime,
      nextEndTime: new Date(nextRankedDayTime.getTime() + MS_PER_DAY)
    };
  };

  const checkTime = () => {
    let now = new Date();
    // // TODO: Comment this test code. Used to look at different state.
    // now = new Date(now.getTime() + 24 * 60 * 60 * 1000 * 2);
    const fullAccess = getFullAccessTimes(now);

    const nextTime = fullAccess.isActive ? fullAccess.nextEndTime : fullAccess.nextStartTime;
    const duration = intervalToDuration({ start: now, end: nextTime });

    slpNextTime = nextTime;
    slpIsFullAccess = fullAccess.isActive;

    const format: (keyof Duration)[] =
      (duration.hours ?? 0) < 1 && (duration.days ?? 0) < 1
        ? ['minutes', 'seconds']
        : ['days', 'hours', 'minutes'];
    slpCountdown = formatDuration(duration, { format, locale: shortEnLocale });
  };

  onMount(async () => {
    subRegionMap[SUBREGION_ALL] = data.db.leaderboard;
    subRegionMap[SUBREGION_BRAZIL] = data.db.leaderboard.filter(
      (code) => data.db.fGetPlayerByCode(code)?.subregion === 'br'
    );
    subRegionMap[SUBREGION_CHILE] = data.db.leaderboard.filter(
      (code) => data.db.fGetPlayerByCode(code)?.subregion === 'cl'
    );
    subRegionMap[SUBREGION_OTHER] = data.db.leaderboard.filter(
      (code) => !['br', 'cl'].includes(data.db.fGetPlayerByCode(code)?.subregion)
    );

    checkTime();
    const interval = window.setInterval(checkTime, 1000);

    loaded = true;
    return () => {
      window.clearInterval(interval);
    };
  });
</script>

<section class="grid grid-cols-1 w-full min-w-[1024px] max-w-[1024px] my-8">
  <h1 class="text-4xl font-medium">Leaderboards</h1>

  <div class="flex justify-between items-end w-inherit my-2 h-[48px]">
    <!-- ToggleButtonGroup -->
    <div
      class="flex flex-row items-center box-content w-64 border-2 border-primary-light text-primary-light rounded-md h-[38px] basis-1/4"
    >
      <button
        class="grow h-full font-semibold border-r"
        on:click={() => toggle(SUBREGION_ALL)}
        class:btn-group-active={selectedRegion === SUBREGION_ALL}
      >
        All
      </button>

      <button
        class="grow h-full font-semibold border-r"
        on:click={() => toggle(SUBREGION_BRAZIL)}
        class:btn-group-active={selectedRegion === SUBREGION_BRAZIL}
      >
        Brazil
      </button>

      <button
        class="grow h-full font-semibold border-r"
        on:click={() => toggle(SUBREGION_CHILE)}
        class:btn-group-active={selectedRegion === SUBREGION_CHILE}
      >
        Chile
      </button>

      <button
        class="grow h-full font-semibold"
        on:click={() => toggle(SUBREGION_OTHER)}
        class:btn-group-active={selectedRegion === SUBREGION_OTHER}
      >
        Other
      </button>
    </div>

    <!-- Ranked Day Countdown -->
    <div class="flex items-center justify-start mx-32 bg-primary-main px-8 basis-1/3 rounded">
      {#if loaded}
        <div class="h-full">
          {#if slpIsFullAccess}
            <enhanced:img
              src="$lib/assets/img/ranked_day_active.svg"
              width="40"
              alt="Ranked Day Active Badge"
            />
          {:else}
            <enhanced:img
              src="$lib/assets/img/ranked_day_inactive.svg"
              width="40"
              alt="Ranked Day Inactive Badge"
            />
          {/if}
        </div>

        <div class="flex flex-col">
          <p class="text-lg font-bold ml-2 {slpIsFullAccess ? 'text-green' : 'text-primary-light'}">
            {slpIsFullAccess ? 'ACTIVE!' : 'INACTIVE'}
          </p>
          <p class="text-xs font-light ml-2 text-primary-light">
            {slpIsFullAccess ? 'ENDS IN:' : 'STARTS IN:'}&nbsp;{slpCountdown}
          </p>
        </div>
      {/if}
    </div>

    <div class="basis-1/5 text-right">
      <p class="text-primary-light">Updated {loaded ? timeSince(data.db.timestamp) : 'long'} ago</p>
    </div>
  </div>

  <!-- Main table -->
  <div class="items-center">
    <table class="border-collapse w-full">
      <thead>
        <tr class="text-primary-light bg-primary-main">
          <th class="">RANK</th>
          <th class="">PLAYER</th>
          <th class="">CHARACTERS</th>
          <th class="">RATING</th>
          <th class="">W / L</th>
        </tr>
      </thead>
      <tbody>
        {#each loaded ? subRegionMap[selectedRegion] : data.db.leaderboard as code, i (code)}
          <tr class="bg-primary-main max-h-[64px]">
            <td class="text-center"
              ><CellRank slippi={data.db.codeMap[code]} localRank={i + 1} /></td
            >
            <td class=""><CellPlayer {data} {code} /></td>
            <td class=""><CellCharacters {data} {code} /></td>
            <td class=""><CellRating {data} {code} /></td>
            <td class=""
              ><CellSets
                wins={data.db.codeMap[code].account?.rankedNetplayProfile?.wins ?? 0}
                losses={data.db.codeMap[code].account?.rankedNetplayProfile?.losses ?? 0}
              /></td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>

<style lang="postcss">
  table,
  th,
  td {
    border-left: none;
    border-right: none;
  }

  th,
  td {
    @apply px-[16px] py-[6px] border-2 border-primary-dark;
  }

  .btn-group-active {
    @apply bg-green/10 text-green border-primary-light;
  }
</style>
