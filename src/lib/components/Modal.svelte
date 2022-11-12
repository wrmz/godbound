<script>
	import Close from '$lib/components/Close.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/** @type {HTMLDialogElement|null} */
	let modal = null;
	let visible = false;

	export let id = '';
	export let isModalOpen = false;

	/** @param {KeyboardEvent} e */
	function handleKeydown(e) {
		if (e.key === 'Escape' && modal) {
			modal.close();
		}
	}

	export function open() {
		document.body.style.overflow = 'hidden';
		if (modal) {
			modal.showModal();
		}
		dispatch('open');
	}

	/** @param {MouseEvent} e */
	export function close(e) {
		document.body.style.overflow = '';
		if (modal) {
			modal.close();
		}
		dispatch('close', e);
	}
</script>

<dialog
	id={id || null}
	class="dialog"
	open={isModalOpen}
	class:visible
	bind:this={modal}
	on:click={close}
	on:keydown={handleKeydown}
>
	<div class="dialog__content">
		<div class="modal" on:click|stopPropagation on:keydown|stopPropagation>
			<header class="modal__header">
				{#if $$slots.header}
					<slot name="header" />
				{/if}
				<button type="button" class="modal__close" aria-label="Close Modal" on:click={close}>
					<Close />
				</button>
			</header>
			<div class="modal__content">
				<slot />
			</div>
		</div>
	</div>
</dialog>

<style>
	.dialog {
		position: fixed;
		z-index: 9999;
		width: 100%;
		height: 100%;
		max-width: none;
		max-height: none;
		inset: 0;
		margin: 0;
		padding: 0;
		border: 0;
		background: transparent;
	}
	.dialog__content {
		display: flex;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		align-items: center;
		justify-content: center;
		background: rgba(var(--color-6-rgb), 0.5);
		backdrop-filter: blur(4px);
	}

	.modal {
		position: relative;
		max-width: calc(100% - 40px);
		max-height: calc(100% - 40px);
		border: 0;
		border: 1px solid var(--color-3);
		border-radius: 4px;
	}
	.modal :global(.form) {
		max-width: none;
		border-radius: 0 0 4px 4px;
	}
	.modal :global(.form),
	.modal :global(.form__footer) {
		background: var(--color-3);
	}
	.modal :global(.form__header) {
		background: var(--color-2);
	}
	.modal__header {
		display: grid;
		grid-auto-flow: column dense;
		width: 100%;
		border-radius: 4px 4px 0 0;
		background: var(--color-0);
	}
	.modal__close {
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-self: flex-end;
		width: 35px;
		height: 35px;
		padding: 0;
		color: white;
		border: 0;
		border-radius: 4px;
		background: transparent;
		transition: color var(--transition);
	}
	.modal__close:hover {
		color: var(--color-red);
	}
	.modal__close:focus:not(:focus-visible) {
		outline: 0;
	}
	.modal__close:focus-visible {
		outline: 0;
		border: 1px solid rgba(var(--color-6-rgb, 0.5));
		box-shadow: inset 0 0 0 1px rgba(var(--color-0-rgb), 0.5);
	}
</style>
