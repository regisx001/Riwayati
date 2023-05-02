<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
</script>

<section class="h-full w-full">
	<TabGroup justify="justify-center">
		<Tab bind:group={tabSet} name="tab1" value={0}>
			<div class="flex justify-center items-center gap-2">
				<i class="ti ti-books text-xl" /> <span class="text-lg font-bold">Novels</span>
			</div>
		</Tab>

		<Tab bind:group={tabSet} name="tab3" value={1}>
			<div class="flex justify-center items-center gap-2">
				<i class="ti ti-git-pull-request-draft text-xl" />
				<span class="text-lg font-bold">Chapters</span>
			</div>
		</Tab>

		<Tab bind:group={tabSet} name="tab2" value={2}>
			<div class="flex justify-center items-center gap-2">
				<i class="ti ti-chart-pie-2 text-xl" /> <span class="text-lg font-bold">Draft</span>
			</div>
		</Tab>
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				(tab panel 1 contents)
			{:else if tabSet === 1}
				(tab panel 2 contents)
			{:else if tabSet === 2}
				(tab panel 3 contents)
			{/if}
		</svelte:fragment>
	</TabGroup>
</section>
