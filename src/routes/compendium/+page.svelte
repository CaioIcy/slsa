<script lang="ts">
  import { onMount } from 'svelte';
  import RankIcon from '$lib/rankIcon.svelte';
  import CharacterStock from '$lib/characterStock.svelte';
  import Flag from '$lib/flag.svelte';
  import { COMPENDIUM } from '$lib/data/compendium.ts';

  export let data = {};

  const textSizeMap = {
    xs: 'text-xs',
    sm: 'text-sm'
  };

  const sz = (name: string): string => {
    if (name.length < 14) {
      return 'sm';
    }
    return 'xs';
  };

  let loaded = false;
  onMount(async () => {
    loaded = true;
  });
</script>

<section class="grid grid-cols-1 w-full min-w-[1024px] max-w-[1024px] mt-8">
  <h1 class="text-4xl font-medium mb-8">Compêndio 2024 - Melee BR</h1>

  <div class="flex flex-col justify-center text-left bg-primary-main p-4 mb-8 text-md rounded">
    <p class="text-xl w-full mb-4 text-center">
      Celebrando todos os jogadores mais ativos da nossa comunidade.
    </p>

    <p class="text-md">Tiers não ordenadas.</p>

    <div class="flex justify-center items-center mt-4">
      <Flag country="br" />
      <p class="px-2 text-primary-light text-center">Junho/2024</p>
      <Flag country="br" />
    </div>
  </div>

  {#each COMPENDIUM as tier}
    <div class="bg-primary-main w-inherit mb-8 rounded">
      <!-- Title -->
      <div class="flex flex-row w-full h-9 items-center bg-slsa-light">
        <p class="text-lg font-bold ml-3">{tier.title}</p>
      </div>

      <!-- Players -->
      <div class="flex flex-row w-full bg-primary-light">
        <div class="grow basis-1/12 flex justify-center items-center {tier.bg}">
          <RankIcon size="54" key={tier.key} />
        </div>

        <div class="grow basis-11/12 bg-primary-main flex items-center justify-center">
          <div class="grid grid-cols-6 p-1">
            {#each Object.keys(tier.slugs).toSorted((a, b) => a.localeCompare(b)) as slug}
              <div
                class="{tier.height} {tier.width} bg-[#ffffff14] mx-5 my-4 border-2 rounded-lg border-primary-light overflow-hidden has-tooltip"
              >
                <div
                  class="w-full h-full flex flex-col items-center justify-center border-2 rounded-md border-primary-dark {tier.bgp}"
                >
                  {#if !tier.shorten}
                    <span class="basis-4/5 grow w-full flex items-center justify-center">
                      <CharacterStock
                        size="32"
                        character={tier.slugs[slug].ch || 'PICHU'}
                        color={tier.slugs[slug].cl || 'DEFAULT'}
                      />
                    </span>
                  {/if}

                  <p
                    class="basis-1/5 grow bg-primary-dark text-center font-extrabold w-full tracking-tight leading-loose {textSizeMap[
                      sz(data.db.fGetPlayerBySlug(slug)?.tag || slug)
                    ]}"
                  >
                    {data.db.fGetPlayerBySlug(slug)?.tag || slug}
                  </p>
                </div>

                <div class="tooltip flex items-center justify-center {tier.width}">
                  <p class="font-normal text-sm text-primary-light">
                    {data.db.fGetPlayerBySlug(slug)?.slippiConnectCodes?.slice(0, 1) || ''}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/each}
</section>

<style lang="postcss">
  .tooltip {
    @apply invisible absolute;
  }

  .has-tooltip:hover .tooltip {
    @apply visible z-50;
  }
</style>
