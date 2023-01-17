<script>
import AboutMe from '@/components/about/AboutMe';
import AboutTech from '@/components/about/AboutTech';
import AboutClients from '@/components/about/AboutClients';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutTech,
		AboutClients,
	},
	data: () => {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

		<!-- About counter -->
		<div class="container mx-auto">
			<AboutTech />
		</div>
		

		<!-- About counter -->
		<div class="container mx-auto">
			<AboutClients />
		</div>
	</div>
</template>

<style scoped></style>
