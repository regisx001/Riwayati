<script lang="ts">
	import { Table, type TableSource, tableMapperValues } from '@skeletonlabs/skeleton';
	export let novels: any;
	const sourceData = novels.items;

	const tableSimple: TableSource = {
		head: ['title', 'description', 'image'],
		body: tableMapperValues(sourceData, ['title', 'description', 'image'])
	};
</script>

<Table interactive={true} source={tableSimple} />
