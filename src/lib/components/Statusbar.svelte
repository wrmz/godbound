<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Searchbar from '$lib/components/Searchbar.svelte';
</script>

<div class="statusbar">
	<Breadcrumbs />
	<Searchbar />
</div>

<style>
	.statusbar {
		position: sticky;
		display: grid;
		grid-template-columns: max-content 1fr;
		justify-content: space-between;
		align-items: center;
		gap: 50px;
		top: var(--nav-height);
		height: 60px;
		padding: 0 20px;
		border-left: 1px solid var(--color-0);
		background: var(--color-2);
		z-index: 1;
	}
</style>
