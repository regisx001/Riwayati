<script lang="ts">
	import { Stepper, Step, InputChip } from '@skeletonlabs/skeleton';
	let tags: any = ['novel'];
</script>

<section class="flex p-6  w-full h-full justify-center items-center ">
	<form action="" method="post" class="w-full h-full">
		<div class="card relative p-10 w-full h-full">
			<header class="card-header">
				<header class="font-bold">
					<h2>To create a new Novel let's Start with a Title ,</h2>
					<h2>And More info about it :</h2>
				</header>
				<div>
					<div class="flex flex-row gap-20 items-center">
						<div class="w-2/3 ">
							<h3 class="font-extrabold my-4">Title :</h3>
							<input
								placeholder="Novel title"
								class=" input rounded-md "
								type="text"
								name="title"
							/>
						</div>
						<div>
							<h3 class="font-extrabold my-4">Year:</h3>
							<input
								class="input rounded-md"
								type="number"
								name=""
								min="1950"
								max="2050"
								value="2023"
								id=""
							/>
						</div>
					</div>

					<h3 class="font-extrabold my-4">Tags :</h3>
					<InputChip rounded={'rounded-md'} bind:value={tags} name="tags" />

					<h3 class="font-extrabold my-4">Description :</h3>
					<textarea
						class="input"
						placeholder="Add a short description ..."
						name="descript"
						id=""
						cols="30"
						rows="5"
					/>
				</div>
				<div>
					<h3 class="font-extrabold my-4">Image :</h3>
					<input type="file" name="image" id="" />
				</div>
			</header>
			<button class="btn absolute bottom-0 right-0 m-16 variant-filled-primary">
				Create New Novel
			</button>
		</div>
	</form>
</section>
