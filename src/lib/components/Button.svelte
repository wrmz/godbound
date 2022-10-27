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
        font-family: var(--font-display);
        font-size: 22px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        text-decoration: none;
        outline: 1px solid transparent;
        border: 1px solid transparent;
        border-radius: 3px;
        overflow: hidden;
        transition: filter var(--transition), border-color var(--transition), outline var(--transition), background-color var(--transition);
        z-index: 1;
    }
    .button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        opacity: 0;
        filter: blur(3px);
        z-index: -1;
        transform: translate(-1px, -1px);
        transition: opacity var(--transition), filter var(--transition);
    }
    .button:hover::before {
        filter: blur(0);
        opacity: 1;
    }

    /** Default Buttons */
    .button--default {
        color: var(--color-dark);
        background: transparent;
    }
    .button--default::before {
        background: var(--color-brown);
    }
    .button--default:hover::before {
        opacity: 0.1;
    }
    /** Non-keyboard focus */
    .button--default:focus:not(:focus-visible) {
        outline: 1px solid transparent;
        border: 1px solid transparent;
    }
    /** Keyboard focus */
    .button--default:focus-visible {
        outline: 1px solid var(--text-color-bk-light);
        border: 1px solid var(--text-color-bk-dark);
    }

    /** Low priority buttons */
    .button--low {
        color: var(--text-color-bk-black);
        background: var(--color-black);
    }
    .button--low::before {
        background: var(--color-gray);
    }
    /** Non-keyboard focus */
    .button--low:focus:not(:focus-visible) {
        outline: 1px solid var(--text-color-bk-light);
    }
    /** Keyboard focus */
    .button--low:focus-visible {
        outline: 1px solid var(--text-color-bk-dark);
        border: 1px solid var(--text-color-bk-light);
    }


    .button--medium {
        color: var(--text-color-bk-tan);
        background: var(--color-tan);
    }
    .button--medium::before {
        background: var(--color-tan);
    }
    .button--medium::before {
        background: var(--color-brown);
    }
    .button--medium:hover::before {
        opacity: 0.1;
    }

    .button--high {
        color: var(--text-color-bk-gray);
        background: var(--color-gray);
    }
    .button--high::before {
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
