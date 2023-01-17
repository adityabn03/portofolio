<template>
	<div>
		<img
			:src="client.img"
			:alt="client.title"
			class="w-96 h-60 py-5 px-10 mx-auto border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"
		/>
	</div>
</template>

<script>
export default {
	props: ['client'],
};
</script>

<style lang="scss" scoped></style>
