<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-5 gap-10 mx-auto mt-16">
			<AboutTechSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>

<script>
import AboutTechSingle from './AboutTechSingle.vue';

export default {
	components: {
		AboutTechSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Technologies I’ve been working with recently',
			clients: [
				{
					id: 1,
					title: 'HTML',
					img :'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg',
				},
				{
					id: 2,
					title: 'CSS',
					img: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
				},
				{
					id: 2,
					title: 'CSS',
					img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
				},
				{
					id: 2,
					title: 'CSS',
					img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
				},
				{
					id: 2,
					title: 'CSS',
					img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
				},
				{
					id: 2,
					title: 'CSS',
					img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
				},
				{
					id: 2,
					title: 'CSS',
					img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
				},
				{
					id: 2,
					title: 'CSS',
					img: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg',
				},
				{
					id: 2,
					title: 'CSS',
					img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
				},
				{
					id: 2,
					title: 'CSS',
					img: 'https://upload.wikimedia.org/wikipedia/commons/3/35/GitLab_icon.svg',
				},
			],
		};
	},
};
</script>

