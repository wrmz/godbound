<script>
    import { page } from '$app/stores';

    export let user = $page.data.user;
</script>

<h1>Profile</h1>
<p>Hello {user.username}! You are logged in with the email {user.email}.</p>
