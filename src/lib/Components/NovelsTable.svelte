<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { getFileUrl } from '$lib/Utils/utils';
	import { goto } from '$app/navigation';
	export let novels: any;

	const popupSettings = (i: number) => {
		const vars: PopupSettings = {
			event: 'click',
			target: `image${i}`
		};

		return vars;
	};
</script>

<!-- <pre>
	{JSON.stringify(novels, null, 2)}
</pre> -->
<div class="table-container">
	<table class="table table-interactive">
		<thead>
			<tr>
				<th>Id</th>
				<th>Title</th>
				<th>Description</th>
				<th>Image</th>
			</tr>
		</thead>
		<tbody>
			{#each novels.items as row, i}
				<tr
					class=""
					on:click={() => {
						goto(`/novels/${row.id}`);
					}}
				>
					<td>
						<span class="bg-black p-1 rounded ">{row.id}</span>
					</td>
					<td>{row.title}</td>
					<td>{row.description.slice(0, 30)}</td>
					<td>
						<div class="p-3 rounded-xl variant-filled-surface  " data-popup="image{i}">
							<div class="arrow variant-filled-surface" />
							<img
								class="w-56"
								src={getFileUrl(row.collectionId, row.id, row.image)}
								alt=""
								srcset=""
							/>
						</div>
						<div
							use:popup={popupSettings(i)}
							style="background-image: url({getFileUrl(row.collectionId, row.id, row.image)});"
							class="h-8 w-8 bg-center arrow bg-no-repeat cursor-pointer"
						/>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
