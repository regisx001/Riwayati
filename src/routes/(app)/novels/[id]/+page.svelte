<script lang="ts">
	import { page } from '$app/stores';
</script>

<pre>
    I have permission to edit : {$page.data.IsCreator}
    Data : 
    {JSON.stringify($page.data, null, 2)}
</pre>
