<script>
    import Menu from '$lib/components/Menu.svelte';
    import { page } from '$app/stores';
    let user = $page.data.user;
</script>
<div class='workspace'>
    <Menu />
    <div class='editor'>
        <h1>Profile</h1>
        <p>Hello {user.username}! You are logged in with the email {user.email}.</p>
    </div>
</div>
<style>
    .workspace {
        display: grid;
        height: 100%;
        grid-template-columns: 120px 1fr;
    }
</style>
