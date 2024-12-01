<script lang="ts">
  import { onMount } from 'svelte';
  import Flag from '$lib/flag.svelte';

  import TutorialImage1 from '$lib/assets/img/wg/1-vnamode-fs8.png?enhanced';
  import TutorialImage2 from '$lib/assets/img/wg/2-addtunnel-fs8.png?enhanced';
  import TutorialImage3 from '$lib/assets/img/wg/3-added-fs8.png?enhanced';
  import TutorialImage4 from '$lib/assets/img/wg/4-activated-fs8.png?enhanced';

  let loaded = false;
  onMount(async () => {
    loaded = true;
  });
</script>

<section class="grid grid-cols-1 w-full min-w-[1024px] max-w-[1024px] mt-8 mb-2">
  <h1 class="text-4xl font-medium mb-2">Wireguard VPN</h1>

  <h2 class="text-2xl font-medium my-4">README</h2>
  This isn't a silver bullet, and might not solve your ping since it depends on several different factors.

  <ul>
    <li>
      Please deactivate the VPN any time you aren't using it. Helps keep the cost down and maintain
      it available for everyone.
    </li>
    <li>
      The server is based in `southamerica-east-1` (São Paulo), so your geographical location will
      influence how beneficial this can be.
    </li>
    <li>Test your connection with other players through Direct.</li>
    <li>
      Through testing my own connection, I've seen substantial routing improvements (125ms to 75ms).
    </li>
    <li>I will keep it available 24/7, to the best of my abilities.</li>
  </ul>

  <p>
    Open source infrastructure: <a
      href="https://github.com/CaioIcy/ssbwg"
      target="_blank"
      rel="noreferrer"
      color="inherit">here</a
    >.<br />
  </p>

  <h2 class="text-2xl font-medium my-4">How To</h2>
  <p>
    1. Download WireSock from <a
      href="https://www.wiresock.net/"
      target="_blank"
      rel="noreferrer"
      color="inherit">wiresock.net</a
    > and install it.
  </p>
  <p>
    2. Download WireSockUI (v0.1.3 or later) from <a
      href="https://github.com/wiresock/WireSockUI/releases"
      target="_blank"
      rel="noreferrer"
      color="inherit">github.com/wiresock/WireSockUI</a
    > and extract it.
  </p>

  <p>
    3. Open WireSockUI and click Settings, and make sure Virtual Network Adapter mode is selected.
    Click Save.
  </p>
  <enhanced:img src={TutorialImage1} alt={'VPN Tutorial Image 1'} />

  <p>4. With the player.conf file I provide to you privately, click Add Tunnel and select it.</p>
  <enhanced:img src={TutorialImage2} alt={'VPN Tutorial Image 2'} />

  <p>5. Your details should appear like this. Click the Activate button to make sure it works.</p>
  <enhanced:img src={TutorialImage3} alt={'VPN Tutorial Image 3'} />

  <p>6. If everything is worked, this is what it looks like. Enjoy!</p>
  <enhanced:img src={TutorialImage4} alt={'VPN Tutorial Image 4'} />

  <p class="text-xs text-primary-light text-center mt-2">
    Disclaimer: I merely provide the server running WireGuard. I am not affiliated with WireSock or
    WireSockUI and am not responsible for those.
  </p>

  <p class="text-xs text-primary-light text-center mt-2">
    Thanks to
    <a
      href="https://discuss.smash.today/@jmlee337/110555300578391389"
      target="_blank"
      rel="noreferrer"
      color="inherit"
    >
      Nicolet
    </a>
    for this.
  </p>
</section>

<style lang="postcss">
  a {
    text-decoration: underline dotted;
  }

  a:hover {
    color: theme(colors.green);
  }

  ul {
    list-style-type: disc;
  }

  ul li {
    margin-left: 32px;
  }
</style>
