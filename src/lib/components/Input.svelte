<script>
    import { tick, createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let inputRef = null;

    export let value = '';
    export let id = undefined;
    export let autofocus = undefined;
    export let autocomplete = undefined;
    export let list = undefined;
    export let label = '';
    export let placeholder = '';
    export let type = 'text';
    export let name = '';
    export let required = false;
    export let disabled = false;
    export let isDirty = false;
    export let isEditing = false;



    /**
     * @param {Object} node
     * @param {String} node.type
     */
    function setType(node) {
        node.type = type;
    }

    function checkIfDirty(e) {
        isEditing = e.type === 'focus';
        isDirty = value.trim().length > 0;

        if (!isEditing && !isDirty) {
            dispatch('blur');
        }
    }

    function handleInput(event) {
        dispatch('input', event);
    }

    export async function focus() {
        await tick();
        inputRef.focus({ focusVisible: true });
    }
</script>
<div class={'field ' + $$props.class}>
    <input
        use:setType
        {name}
        id={id || null}
        list={list || null}
        autofocus={autofocus || null}
        autocomplete={autocomplete || null}
        {required}
        aria-label={label}
        placeholder="{placeholder || label}"
        bind:value
        bind:this={inputRef}
        {disabled}
        class="field__input"
        class:field__input--dirty={isDirty && !isEditing}
        on:focus={checkIfDirty}
        on:blur={checkIfDirty}
        on:input={handleInput}
    />
</div>
<style>
.field {
    position: relative;
    display: grid;
    overflow: hidden;
}
.field__input {
    height: 54px;
    padding: 0 18px;
    font-family: var(--font-copy);
    font-size: 1.125rem;
    font-weight: 300;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--color-foreground);
    border-radius: 2px;
    border: 1px solid var(--color-1);
    background: var(--color-2);
    overflow: hidden;
    box-shadow: 0 0 0 1px transparent;
    transition: background-color var(--transition), border-color var(--transition), outline-color var(--transition), color var(--transition), box-shadow var(--transition), padding-right var(--transition);
}
.field__input::placeholder {
    color: var(--color-6);
    transition: color var(--transition);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.field__input::selection {
    background: rgba(var(--color-5-rgb), 0.6);
}
.field__input:focus::placeholder {
    color: var(--color-5);
}
.field__input:disabled {
    cursor: not-allowed;
}
.field__input:focus {
    padding-right: calc(50px);
    outline: 0;
    border: 1px solid var(--color-0);
    background: var(--color-1);
}

.field__input:focus-visible {
    outline: 0;
}
.field::after {
    content: '0';
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    width: 50px;
    height: 54px;
    font-family: var(--font-symbol);
    font-size: 2.5em;
    color: var(--color-4);
    filter: blurX(4px);
    transform: translateX(100%);
    transition: transform var(--transition), filter var(--transition);
}
.field:focus-within::after {
    filter: blurX(0);
    transform: translateX(0);
}

.field__input--dirty:invalid {
    border-color: var(--color-red);
}


</style>
