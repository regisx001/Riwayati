<script lang="ts">
	import { enhance } from '$app/forms';
	import { Selectedpage } from '$lib/Utils/stores';
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	export let pathname: any;
</script>

<AppRail selected={Selectedpage}>
	<AppRailTile
		class={'/dashboard' === pathname ? '!bg-primary-500' : ''}
		tag="a"
		href={'/dashboard'}
		label="Dashboard"
		value={0}
	>
		<i class="ti ti-user-circle text-3xl" />
	</AppRailTile>

	<AppRailTile
		class={'/dashboard/profile' === pathname ? '!bg-primary-500' : ''}
		tag="a"
		href={'/dashboard/profile'}
		label="Profile"
		value={1}
	>
		<i class="ti ti-user-circle text-3xl" />
	</AppRailTile>

	<AppRailTile label="New Novel" value={2}>
		<i class="ti ti-book-2 text-3xl" />
	</AppRailTile>

	<AppRailTile label="Draft" value={3}>
		<i class="ti ti-git-pull-request-draft text-3xl" />
	</AppRailTile>

	<AppRailTile label="My Novels" value={4}>
		<i class="ti ti-book text-3xl" />
	</AppRailTile>
	<svelte:fragment slot="trail">
		<form action="/logout" method="post" use:enhance>
			<AppRailTile label="Logout">
				<i class="ti ti-logout text-3xl" />
			</AppRailTile>
		</form>
	</svelte:fragment>
</AppRail>
