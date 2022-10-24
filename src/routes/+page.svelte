<script>
    import { page } from '$app/stores';


    let name = 'world';
    let string = `this string contains some <strong>HTML!!!</strong>`

    /** @type {import('./$types').PageServerData}*/
    export let data = {
        loadData: 'No data'
    };
</script>

<h1>Hello {name}!</h1>
<p>{@html string}</p>
<p>{data.loadData}</p>
