<script>
    export let value = '';
    export let id = '';
    export let label = '';
    export let type = 'text';
    export let name = '';
    export let required = false;
    export let disabled = false;
    export let inputRef = null;

    /**
     * @param {Object} node
     * @param {String} node.type
     */
    function setType(node) {
        node.type = type;
    }
</script>
<div class={'field ' + $$props.class}>
    <input
        use:setType
        {name}
        {id}
        {required}
        aria-label={label}
        placeholder="{label}"
        bind:value
        bind:this={inputRef}
        {disabled}
        class="field__input"
    />
</div>
<style>
.field {
    display: grid;
    gap: 10px;
}
.field__input {
    height: 54px;
    padding: 0 18px;
    font-family: var(--font-copy);
    font-size: 1.125rem;
    font-weight: 300;
    color: var(--color-foreground);
    border-radius: 2px;
    border: 1px solid var(--color-1);
    background: var(--color-2);
    box-shadow: 0 0 0 1px transparent;
    transition: background-color var(--transition), border-color var(--transition), outline-color var(--transition), color var(--transition), box-shadow var(--transition);
}
.field__input::placeholder {
    color: var(--color-6);
    transition: color var(--transition);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.field__input:focus::placeholder {
    color: var(--color-5);
}
.field__input:focus {
    outline: 0;
    border: 1px solid var(--color-0);
    background: var(--color-1);
}

.field__input:focus-visible {
    outline: 0;
}

.field__input:invalid {
    border-color: var(--color-red);
}

</style>
