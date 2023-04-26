<script lang="ts">
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { writable, type Writable } from 'svelte/store';
	const storeValue: Writable<number> = writable(0);
</script>

<AppRail selected={storeValue}>
	<AppRailTile label="Tile 1" value={0}>(icon)</AppRailTile>
	<AppRailTile label="Tile 2" value={1}>(icon)</AppRailTile>
	<svelte:fragment slot="trail">
		<AppRailTile tag="a" href={'/login'} label="Github" value={2}>
			<i class="ti ti-brand-github text-3xl" />
		</AppRailTile>
	</svelte:fragment>
</AppRail>
