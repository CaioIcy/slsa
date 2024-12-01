<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';

  export const data = {};
</script>

<svelte:head>
  <title>SLSA</title>
</svelte:head>

<main>
  <nav class="flex items-center justify-between bg-teal-500 w-full h-16">
    <div
      class="flex items-center flex-shrink-0 text-white mr-6 border-r-4 border-primary-dark px-8 h-16"
    >
      <span class="font-semibold text-2xl tracking-tight">🐸 SLSA</span>
    </div>

    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-md lg:flex-grow">
        <a href={`${base}/leaderboards`} class="block lg:inline-block lg:mt-0 mr-4">
          Leaderboards
        </a>
        <a href={`${base}/rankings`} class="block lg:inline-block lg:mt-0 mr-4"> Rankings </a>
        <a href={`${base}/stats`} class="block lg:inline-block lg:mt-0 mr-4"> Stats </a>
      </div>
    </div>
  </nav>

  <div class="flex lg:justify-center ml-2 lg:ml-0">
    <slot />
  </div>

  <footer class="text-center text-sm text-primary-light my-2">
    <p>
      <a href="https://slippi.gg/#support" target="_blank" rel="noreferrer"> Support Slippi </a>

      • Maintained by
      <a href="https://bsky.app/profile/caioicy.bsky.social" target="_blank" rel="noreferrer"> @caioicy </a>

      • Inspired by
      <a href="https://www.buymeacoffee.com/blorppppp" target="_blank" rel="noreferrer">
        blorppppp
      </a>
    </p>
  </footer>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.primary.dark);
    color: theme(colors.primary.contrastText);
    font-family: 'Rubik', 'Arial', 'sans-serif';
  }

  /*   :global(*) {
    border: 1px dotted red;
  } */

  nav {
    background-color: theme(colors.purple);
  }

  a {
    text-decoration: underline dotted;
  }

  a:hover {
    color: theme(colors.green);
  }
</style>
