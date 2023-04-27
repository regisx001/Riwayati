<script lang="ts">
	import { getAvatarUrl } from '$lib/Utils/utils';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { enhance } from '$app/forms';
	export let user: any;
	// Avatar Things
	$: isAvatarHovered = false;
	let avatarInput: HTMLElement;
	let avatar = getAvatarUrl(user) || 'https://i.pravatar.cc/';
	function loadAvatar(e: Event) {
		// @ts-ignore
		const newAvatar = e.target.files[0];
		avatar = URL.createObjectURL(newAvatar);
	}
	// End Avatar Things
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>

<section class="flex w-full h-full justify-center items-center">
	<form
		class="max-w-5xl w-full"
		enctype="multipart/form-data"
		action="?/updateProfile"
		method="post"
		use:enhance
	>
		<div class="card w-full px-10 py-6">
			<header class="flex flex-col card-header justify-center p-2 items-center ">
				<h2 class="py-4 font-bold">Update Personal Info</h2>
				<input
					on:change={loadAvatar}
					bind:this={avatarInput}
					type="file"
					name="avatar"
					class="hidden"
				/>

				<!-- svelte-ignore a11y-mouse-events-have-key-events -->
				<div
					class="relative"
					on:mouseover={() => {
						isAvatarHovered = true;
					}}
					on:mouseout={() => {
						isAvatarHovered = false;
					}}
				>
					<div>
						<Avatar src={avatar} initials="zz" width="w-40" />
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						on:click={() => {
							avatarInput.click();
						}}
						class="absolute
                        {isAvatarHovered ? 'flex' : 'hidden'}
                        cursor-pointer w-full
                        bottom-0 right-0 backdrop-brightness-75 
                        justify-center items-center h-20 
                        rounded-b-full"
					>
						<i class="btn ti ti-camera text-3xl" />
					</div>
				</div>
			</header>
			<section class="w-full flex flex-col">
				<div class="w-full flex flex-row">
					<div class="flex flex-col w-1/2 px-4 gap-2">
						<label class="font-bold px-2" for=""> Username : </label>
						<input
							value={user?.username || ''}
							placeholder="Username"
							class="input rounded-md"
							type="text"
							name="username"
						/>

						<label class="font-bold px-2" for=""> Name : </label>
						<input
							value={user?.name || ''}
							placeholder="Full Name"
							class="input rounded-md"
							type="text"
							name="name"
						/>
					</div>
					<div class="flex flex-col w-1/2 px-4 gap-2">
						<label class="font-bold px-2" for=""> Email : </label>
						<input
							disabled
							placeholder="Email"
							value={user?.email || ''}
							class="input rounded-md"
							type="text"
							name="email"
						/>
					</div>
				</div>
				<div class="p-4">
					<label class="font-bold px-2 pb-2" for="">Description : </label>
					<textarea
						value={user.description}
						class="input"
						placeholder="Bio Here"
						name="description"
						cols="30"
						rows="5"
					/>
				</div>
			</section>
			<footer class="card-footer flex w-full justify-center items-center">
				<button class="btn variant-ringed-primary p-4"> Save Changes </button>
			</footer>
		</div>
	</form>
</section>
