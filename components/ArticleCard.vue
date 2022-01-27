<template>
	<v-card height="280">
		<v-img
			:src="`/images/${ article.preview_image }`"
			class="white--text align-end"
			gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
			height="200px"
		>
			<v-card-title>
                {{ article.name }} 
                <v-spacer />
				<span class="date">{{ article.date }}</span>
            </v-card-title>
		</v-img>

		<v-card-text>
			<p>{{ article.shortDesc }}</p>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: ['article']
}
</script>

<style lang="scss" scoped>
.date {
    font-size: 12px;
}
</style>
