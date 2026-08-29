<script lang="ts">
  import '../app.css';
  import SiteFooter from '$lib/SiteFooter.svelte';
  import SiteHeader from '$lib/SiteHeader.svelte';

  let { children } = $props();
</script>

<a class="skip-link" href="#main">Skip to content</a>
<SiteHeader />
{@render children()}
<SiteFooter />
