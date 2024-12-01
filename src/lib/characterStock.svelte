<script lang="ts">
  const stockModules = import.meta.glob('$lib/assets/img/stocks/*.{png,webp}', {
    eager: true,
    query: {
      enhanced: true
    }
  });

  export let character = 'MARIO';
  export let color = 'DEFAULT';
  export let size = 20;

  const classMap = {
    36: 'stock-36',
    32: 'stock-32',
    20: 'stock-20',
    18: 'stock-18',
    12: 'stock-12'
  };

  const getStockModule = (ch, cl) => {
    for (const key in stockModules) {
      if (key.includes(`/${ch}_${cl}`)) {
        return stockModules[key];
      }
    }
    return null;
  };
</script>

<enhanced:img
  src={getStockModule(character, color).default}
  alt={`${character}_${color}`}
  class={`${classMap[size]}`}
/>

<style lang="postcss">
  .stock-36 {
    width: 36px;
    height: 36px;
  }

  .stock-20 {
    width: 20px;
    height: 20px;
  }

  .stock-18 {
    width: 18px;
    height: 18px;
  }

  .stock-12 {
    width: 12px;
    height: 12px;
  }

  .stock-32 {
    width: 32px;
    height: 32px;
  }
</style>
