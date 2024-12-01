<script lang="ts">
  import { onMount } from 'svelte';
  const rankModules = import.meta.glob('$lib/assets/img/ranks/*.{png,webp}', {
    eager: true,
    query: {
      enhanced: true
    }
  });

  export let key = '';
  export let size = 36;

  const classMap = {
    36: 'rank-36',
    54: 'rank-54',
    72: 'rank-72'
  };

  const getRankModule = (ic) => {
    for (const key in rankModules) {
      if (key.includes(`/${ic}.png`)) {
        return rankModules[key];
      }
    }
    return null;
  };
</script>

{#if !!key}
  <enhanced:img src={getRankModule(key).default} alt={key} class={classMap[size]} />
{/if}

<style lang="postcss">
  .rank-36 {
    width: 36px;
    height: 36px;
  }

  .rank-54 {
    width: 54px;
    height: 54px;
  }

  .rank-72 {
    width: 72px;
    height: 72px;
  }
</style>
