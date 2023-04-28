<script lang="ts">
	import { onMount } from 'svelte';

	let editor: HTMLElement;

	onMount(async () => {
		const ckeditor = await import('@ckeditor/ckeditor5-build-classic');
		ckeditor.default.create(editor);
	});
</script>

<div class="text-black p-6">
	<div bind:this={editor} />
</div>
