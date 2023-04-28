<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
</script>

<section class="h-full w-full">
	<TabGroup>
		<Tab bind:group={tabSet} name="tab1" value={0}>(label)</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>(label)</Tab>
		<Tab bind:group={tabSet} name="tab3" value={2}>(label)</Tab>
		<!-- Tab Panels --->
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
