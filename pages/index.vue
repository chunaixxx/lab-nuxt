<template>
	<v-row justify="center" align="center">
		<v-col cols="12" sm="12" md="12">
			<h1 class="text-center ma-5">Добро пожаловать на наш новостной сайт!</h1>
			<v-carousel
				cycle
				height="700"
				hide-delimiter-background
				show-arrows-on-hover
			>
				<v-carousel-item v-for="(slide, i) in sliderArticles" :key="i">
					<v-img :src="`images/${slide.full_image}`" position="top left" />
				</v-carousel-item>
			</v-carousel>
		</v-col>
	</v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'IndexPage',

	computed: {
		...mapGetters('articles', {
			sliderArticles: 'getSliderArticles'
		})
	},
}
</script>

<style scoped></style>
