<script lang="ts">
	import { enhance } from '$app/forms';
	import { Selectedpage } from '$lib/Utils/stores';
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
</script>

<AppRail selected={Selectedpage}>
	<AppRailTile label="Profile" value={0}>
		<i class="ti ti-user-circle text-3xl" />
	</AppRailTile>

	<AppRailTile label="New Novel" value={1}>
		<i class="ti ti-book-2 text-3xl" />
	</AppRailTile>

	<AppRailTile label="Draft" value={2}>
		<i class="ti ti-git-pull-request-draft text-3xl" />
	</AppRailTile>

	<AppRailTile label="My Novels" value={3}>
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
