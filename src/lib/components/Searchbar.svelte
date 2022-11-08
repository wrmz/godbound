<script>
    import Input from '$lib/components/Input.svelte';

    const id = `search${crypto.randomUUID()}`;
    const _searchOptions = [
        {
            tag: 'global',
            queries: [
                {
                    query: 'View dashboard'
                },
                {
                    query: 'View campaigns'
                },
                {
                    query: 'View characters'
                },
                {
                    query: 'View profile'
                },
                {
                    query: 'View account'
                },
                {
                    query: 'Manage campaigns'
                },
                {
                    query: 'Manage characters'
                },
                {
                    query: 'Edit profile'
                },
                {
                    query: 'Manage account'
                }

            ]
        },
        {
            tag: 'account',
            queries: [
                {
                    query: 'Update Password'
                },
                {
                    query: 'Update Email'
                },
                {
                    query: 'Change Password'
                },
                {
                    query: 'Edit Email'
                },
                {
                    query: 'Edit Password'
                },
                {
                    query: 'New Password'
                },
                {
                    query: 'New Email'
                },
                {
                    query: 'Change Email'
                },
                {
                    query: 'Delete Account'
                }
            ]
        },
        {
            tag: 'campaigns',
            queries: [

            ]
        },
        /**
         * @todo This will be its own config later on. We'll also tack on other dynamic fields later
         *       to allow the user to search character names, stats, etc.
         */
        {
            tag: 'characters',
            queries: [
                {
                    query: 'Create a new character'
                },
                {
                    query: 'Manage characters'
                }
            ]
        },
        {
            tag: 'profile',
            queries: [

            ]
        },
        {
            tag: 'wiki',
            queries: [

            ]
        }
    ];

    let searchOptions = _searchOptions.flatMap(opt => opt.queries);


    /** @type {String} */
    let query;

    /** @param {CustomEvent} event */
    function handleInput (event) {
        console.log(`Searching for ${event.detail.target.value}`);
    };


</script>

<div class='search'>
    <Input
        id={id}
        name={id}
        list={id + 'List'}
        aria-label='Search'
        placeholder='Search&hellip;'
        autocomplete='true'
        bind:value={query}
        on:input={handleInput}
    />
    <datalist id={id + 'List'}>
        {#each searchOptions as option}
            <option value={option.query}>
        {/each}
    </datalist>
</div>

<style>

    .search :global(.field__input ) {
        height: 40px;
        font-size: 1rem;
        border: 1px solid var(--color-0);
        background: var(--color-1);
    }
</style>
