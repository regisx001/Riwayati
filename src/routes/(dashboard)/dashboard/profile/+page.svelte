<script lang="ts">
	import { page } from '$app/stores';
	import Profile from '$lib/Pages/Dashboard/Profile.svelte';
</script>

<Profile user={$page.data.user} />
