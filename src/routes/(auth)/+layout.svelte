<script>
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../../app.postcss';
	// Imports
	import { AppShell, Toast } from '@skeletonlabs/skeleton';
	import NavBar from '$lib/Components/NavBar.svelte';
</script>

<AppShell>
	<!-- <svelte:fragment slot="header">
		<NavBar />
	</svelte:fragment> -->
	<slot />
</AppShell>

<Toast />
