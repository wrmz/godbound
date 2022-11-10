<script>
	import Button from '$lib/components/Button.svelte';
	import Callout from '$lib/components/Callout.svelte';
	import { page } from '$app/stores';
</script>

<section class="error">
	<Callout title="{$page.status} %%ErroR%%">
		<svelte:fragment slot="content">
			<p>{$page.error.message}</p>
		</svelte:fragment>
		<svelte:fragment slot="footer">
			<Button href="/" priority="medium">Back to Home</Button>
		</svelte:fragment>
	</Callout>
</section>

<style>
	.error {
		display: grid;
		align-items: center;
		justify-items: center;
		min-height: calc(100vh - var(--nav-height));
		padding: 0 100px;
		text-align: center;
	}
</style>
