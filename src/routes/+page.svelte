<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';

  onMount(async () => {
    goto(`${base}/leaderboards`);
  });
</script>
