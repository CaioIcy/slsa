<script lang="ts">
  // https://svelte-flag-icons.codewithshin.com/

  import { onMount } from 'svelte';
  import { Br, Cl, Ar, Uy, Co, Ve, Ec, Pe, Us, Bo, Un, Gt, Xx } from 'svelte-flag-icons';

  export let country = 'Xx';
  export let width = 24;
  let loaded = false;

  const FLAG_MAP = {
    br: Br,
    cl: Cl,
    ar: Ar,
    uy: Uy,
    co: Co,
    ve: Ve,
    ec: Ec,
    pe: Pe,
    us: Us,
    bo: Bo,
    un: Un,
    gt: Gt,
    xx: Xx
  };

  onMount(async () => {
    loaded = true;
  });
</script>

{#if loaded}
  {#if !!country}
    <svelte:component this={FLAG_MAP[country] || FLAG_MAP['xx']} size={width} />
  {/if}
{:else if width === 48}
  <div class="placeholder-48"></div>
{:else if width === 12}
  <div class="placeholder-12"></div>
{:else}
  <div class="placeholder-24"></div>
{/if}

<style>
  .placeholder-24 {
    max-width: 24px;
    max-height: 18px;
    width: 24px;
    height: 18px;
    background-color: theme(colors.gray);
    border-radius: 2px;
    border-size: 4px;
  }

  .placeholder-12 {
    max-width: 12px;
    max-height: 8px;
    width: 12px;
    height: 8px;
    background-color: theme(colors.gray);
    border-radius: 2px;
    border-size: 4px;
  }

  .placeholder-48 {
    max-width: 48px;
    max-height: 36px;
    width: 48px;
    height: 36px;
    background-color: theme(colors.gray);
    border-radius: 2px;
    border-size: 4px;
  }
</style>
