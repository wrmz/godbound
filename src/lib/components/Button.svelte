<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const classProp = $$props.class ? $$props.class.split(' ') : [];
    const classList = [ 'button', `button--${$$props.priority || 'default'}`, ...classProp ];

    let className = classList.join(' ');

    export let type = 'button';
    export let href = '';

    function handleClick() {
        dispatch('click');
    }
</script>

{#if href}
    <!-- svelte-ignore a11y-missing-attribute -->
    <a {href} class={className} { ...$$props.on} on:click={handleClick}>
        <slot />
    </a>
{:else}
    <button {type} class={className} on:click={handleClick}>
        <slot />
    </button>
{/if}
<style>
    .button {
        cursor: pointer;
        position: relative;
        display: inline-grid;
        grid-auto-flow: column dense;
        grid-auto-columns: max-content;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 15px;
        font-family: var(--font-disprlay);
        font-weight: 300;
        font-size: 22px;
        letter-spacing: 0.05em;
        /* text-transform: uppercase; */
        text-decoration: none;
        border: 0.5px solid transparent;
        box-shadow: 0 0 0 0.5px transparent;
        border-radius: 3px;
        overflow: hidden;
        transition: border var(--transition), background-color var(--transition), color var(--transition), box-shadow var(--transition);
        z-index: 1;
    }

    .button:focus:not(:focus-visible) {
        outline: 0;
    }
    .button:focus-visible {
        outline: 0;
        border: 1px solid var(--color-light);
        box-shadow: 0 0 0 1px var(--color-dark);
    }

    /** Default Buttons */
    .button--default {
        color: var(--color-dark);
        background: transparent;
    }
    /** Non-keyboard focus */
    .button--default:focus:not(:focus-visible) {
        border: 1px solid transparent;
    }
    /** Keyboard focus */
    .button--default:focus-visible {
        border: 1px solid var(--text-color-bk-dark);
    }

    /** Low priority buttons */
    .button--low {
        color: var(--text-color-bk-black);
        background: var(--color-black);
    }


    .button--medium {
        color: var(--text-color-bk-dark);
        border-color: var(--text-color-bk-dark);
        background-color: transparent;
    }
    .button--medium:hover {
        box-shadow: 0 0 0 0.5px var(--text-color-bk-dark);
    }
    .button--medium:hover,
    .button--medium:focus-visible {
        background-color: rgba(var(--color-dark-rgb), 0.1);
    }


    .button--high {
        color: var(--text-color-bk-gray);
        background: var(--color-gray);
    }

    .button--em {
        color: var(--text-color-bk-tan);
        background: var(--color-tan);
    }
    .button--em::before {
        background: var(--color-tan);
    }
</style>
