<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 gap-1 mx-auto mt-16">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>

<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the brands I have worked with',
			clients: [
				{
					id: 1,
					title: 'Amazon',
					img :'https://dinkes.lampungprov.go.id/wp-content/uploads/2017/03/logo.png',
				},
				{
					id: 2,
					title: 'Sony',
					img: require('@/assets/images/brands/privi-logo.jpg'),
				},
				
			],
		};
	},
};
</script>

