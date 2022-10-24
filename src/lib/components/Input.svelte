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
    font-size: 18px;
    font-weight: 300;
    color: var(--text-color-bk-tan);
    border-radius: 3px;
    border: 1px solid var(--color-yellow);
    background-color: white;
    transition: background-color var(--transition), border-color var(--transition), outline-color var(--transition), color var(--transition);
}
.field__input::placeholder {
    color: rgba(var(--color-orange-rgb), 0.8);
}
.field__input:focus {
    outline: 0;
    border-color: var(--color-dark);
}
.field__input:focus::placeholder {
    color: rgba(var(--color-blue-rgb), 0.4);
}
</style>
