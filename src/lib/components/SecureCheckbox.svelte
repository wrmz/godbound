<script>
	import { createEventDispatcher } from 'svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';

	const dispatch = createEventDispatcher();

	export let checked = false;
	export let name = '';

	/** @param {any} detail */
	const handleChange = ({ detail }) => {
		const form = detail.target.form;
		checked = detail.target.checked;

		if (form) {
			handleSubmit({ target: form });
		}
	};

	/** @param {any} event */
	const handleSubmit = (event) => {
		let data = new FormData(event.target);
		dispatch('submit', data);
	};
</script>

<form class="s-checkbox" on:submit|preventDefault={handleSubmit}>
	<Checkbox {name} bind:checked on:change={handleChange}>
		<slot />
	</Checkbox>
</form>

<style>
</style>
