<script>
	import { createEventDispatcher } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';

	const dispatch = createEventDispatcher();

	export let error = '';
	export let name = '';
	export let autocomplete = 'off';
	export let title = '';
	export let submit = 'Submit';
	export let method = 'POST';
	export let priority = 'medium';
	export let preventDefault = false;

	/**
	 * @param {SubmitEvent} e
	*/
	const handleSubmit = function (e) {
		if (preventDefault) {
			e.preventDefault();
		}

		dispatch('submit', e);
	};
</script>

<form id={name} {name} {autocomplete} {method} class="form" on:submit|trusted={handleSubmit}>
	{#if title}
		<header class="form__header">
			<Heading content={title} />
		</header>
	{/if}
	<div class="form__fields">
		{#if error}
			<p>{error}</p>
		{/if}
		<slot />
	</div>
	<footer class="form__footer">
		<Button type="submit" {priority}>{submit}</Button>
	</footer>
</form>

<style>
	.form {
		display: grid;
		width: 660px;
		max-width: calc(100% - 40px);
		gap: 60px;
		color: var(--color-foreground);
		border-radius: 4px;
		background: var(--color-panel-background);
		box-shadow: var(--shadow);
		overflow: hidden;
	}
	.form__header {
		position: relative;
		display: grid;
		align-items: center;
		justify-content: center;
		height: 175px;
		color: var(--color-foreground);
		background: var(--color-1);
	}
	.form__fields {
		display: grid;
		gap: 20px;
		padding: 0 40px;
	}

	.form__footer {
		position: relative;
		display: grid;
		grid-auto-flow: column dense;
		grid-auto-columns: minmax(25%, 1fr);
		justify-content: center;
		align-items: center;
		gap: 40px;
		padding: 0 40px 40px;
		border-radius: 0 0 2px 2px;
		background: var(--color-panel-background);
	}
</style>
