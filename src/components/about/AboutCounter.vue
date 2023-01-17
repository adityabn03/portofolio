<template>
	<div class="w-full mx-auto mt-16 sm:w-3/4 text-left">
	<h1 class="mx-auto text-ternary-dark dark:text-ternary-light mb-4 text-3xl">Work Experience</h1>
			<li
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</li>
		</div>
</template>

<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Dinas Kesehatan Provinsi Lampung',
				},
				{
					id: 2,
					bio:
						'Frontend engineer Intern at Privyid',
				},
			],
		};
	},
};
</script>