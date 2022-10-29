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
        height: 50px;
        margin: 0;
        padding: 0 20px;
        font-family: var(--font-display);
        font-size: 1.25em;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-decoration: none;
        color: var(--color-foreground);
        border: 1px solid transparent;
        box-shadow: inset 0 0 0 1px transparent;
        border-radius: 3px;
        overflow: hidden;
        transition: border var(--transition), background-color var(--transition), color var(--transition), box-shadow var(--transition);
    }

    .button:focus:not(:focus-visible) {
        outline: 0;
    }
    .button:focus-visible {
        outline: 0;
        border: 1px solid rgba(var(--color-6-rgb, 0.5));
        box-shadow: inset 0 0 0 1px rgba(var(--color-0-rgb), 0.5);
    }


    /** Low priority buttons */
    .button--low {
        color: var(--text-color-bk-black);
        background: var(--color-black);
    }
    .button--medium {
        background-color: var(--color-2);
    }
    .button--medium:hover {
        border-color: var(--color-1);
    }
    .button--medium:hover,
    .button--medium:focus-visible {
        background-color: var(--color-1);
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
