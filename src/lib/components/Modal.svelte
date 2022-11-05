<script>
    import Close from '$lib/components/Close.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let modal;
    let visible = false;

    export let id = '';
    export let isModalOpen = null;

    export function open() {
        modal.showModal();
        dispatch('open');
    }

    export function close() {
        modal.close();
        dispatch('close');
    }

</script>

<dialog
    class='dialog'
    open={isModalOpen}
    class:visible bind:this={modal}
    on:click={close}
>
    <div class='dialog__content'>
        <div class='modal'>
            <header class='modal__header'>
                {#if $$slots.header}
                    <slot name='header'></slot>
                {/if}
                <button
                    type='close'
                    class='modal__close'
                    aria-label='Close Modal'
                    on:click={close}
                ><Close /></button>
            </header>
            <div class='modal__content'>
                <slot></slot>
            </div>
        </div>
    </div>
</dialog>

<!-- <div id='topModal' class:visible bind:this={topDiv} on:click={() => close()}>
    <div id='modal' on:click|stopPropagation={() => {}}>
        <svg id='close' on:click={() => close()} viewBox='0 0 12 12'>
            <circle cx='6' cy='6' r='6' />
            <line x1=3 y1=3 x2=9 y2=9 />
			<line x1=9 y1=3 x2=3 y2=9 />
        </svg>
        <div id='modal-content'>
            <slot></slot>
        </div>
    </div>
</div> -->

<style>
    .dialog {
        position: fixed;
        z-index: 9999;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0;
        border: 0;
        background: rgba(var(--color-3-rgb), 0.6);
        /* backdrop-filter: blur(2px); */

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
    }

    .modal {
        position: relative;
        padding: 50px;
        border: 0;
        border: 1px solid var(--color-1);
        border-radius: 9px;
        background: rgba(var(--color-1-rgb), 0.5);
        backdrop-filter: blur(3px);
        box-shadow: var(--shadow);
    }
    .modal :global(.form) {
        max-width: none;
    }
    .modal :global(.form__header) {
        background: var(--color-0);
    }
    .modal__header {
        position: absolute;
        display: grid;
        grid-auto-flow: column dense;
        width: 100%;
    }
    .modal__close {
        position: relative;
        justify-self: flex-end;
        top: 0;
        right: -0;
    }

    /* #close {
        position: absolute;
        top: -12px;
        right: -12px;
        width: 24px;
        height: 24px;
        cursor: pointer;
        fill: #f44;
        transition: transform 0.3s;
    }
    #close:hover {
        transform: scale(2);
    }
    #close line {
        stroke: #fff;
        stroke-width: 2;
    }
    #modal-content {
        max-width: calc(100vw - 20px);
        max-height: calc(100vh - 20px);
        overflow: auto;
    } */
</style>
