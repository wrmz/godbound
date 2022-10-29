<script>
    export let content = '';

    const titleParts = content.split('%%').map(p => p.trim());
</script>

<h1 class="heading">
    {#if titleParts.length === 3}
        <span>{titleParts[0]}</span>
        <em>{titleParts[1]}</em>
        <span>{titleParts[2]}</span>
    {:else}
        Invalid title must have exactly 3 pieces: "top %%middle%% bottom"
    {/if}
</h1>

<style>
    .heading {
        display: inline-block;
        margin: 0;
        padding: 26px 30px;
        font-family: var(--font-display);
        font-size: 1.25em;
        text-align: center;
        text-transform: uppercase;
        line-height: 1;
        letter-spacing: 0.05em;
    }
    .heading em,
    .heading span {
        display: block;
        transform: none;
    }
    .heading em {
        position: relative;
        margin: 0 0.05em;
        font-size: 3em;
        font-style: normal;
        font-weight: 300;
        text-transform: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .heading em::before,
    .heading em::after {
        content: '';
        position: absolute;
        left: 50%;
        height: 1px;
        border-radius: 2px;
        background: var(--color-foreground);
        transform: translateX(-50%);
    }
    .heading em::before {
        top: -0.05em;
        width: 100%;
    }
    .heading em::after {
        bottom: 2px;
        width: calc(100% - 1em);
    }
    .heading span {
        margin-bottom: 0.25em;
        text-transform: uppercase;
        line-height: 1.5;
        letter-spacing: 0.05em;
    }
</style>
