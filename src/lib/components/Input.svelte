<script>
    export let value = '';
    export let id = '';
    export let label = '';
    export let type = 'text';
    export let name = '';
    export let required = false;
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
    color: var(--text-color-bk-tan);
    border-radius: 2px;
    border: 0.5px solid var(--color-brown);
    background-color: var(--color-tan);
    box-shadow: 0 0 0 0.5px transparent;
    transition: background-color var(--transition), border-color var(--transition), outline-color var(--transition), color var(--transition), box-shadow var(--transition);
}
.field__input::placeholder {
    font-size: 1rem;
    text-transform: uppercase;
    color: rgba(var(--color-brown-rgb), 0.7);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.field__input:focus {
    outline: 0;
    border-color: var(--color-dark);
    box-shadow: 0 0 0 0.5px var(--color-dark);
    background-color: rgba(255, 255, 255, 0.2);
}
.field__input:focus::placeholder {
    color: rgba(var(--color-black-rgb), 0.4);
}
</style>
