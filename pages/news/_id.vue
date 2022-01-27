<template>
	<div>
		<v-img
			:src="`/images/${ article.full_image }`"
			class="white--text align-end"
			gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
			height="400px"
		>
			<v-card-title>
				{{ article.name }}
				<v-spacer />
				<span class="date">{{ article.date }}</span>
			</v-card-title>
		</v-img>

		<p class="ma-5">{{ article.desc }}</p>

		<div class="wrapper ma-5">
			<h3 class="title">Оставить комментарий</h3>

			<form @submit.prevent="handleForm" class="mb-5">
				<v-text-field
					v-model="name"
					:counter="10"
					label="Имя"
					required
				></v-text-field>

				<v-text-field
					v-model="comment"
					:counter="100"
					label="Комментарий"
					required
				></v-text-field>

				<v-btn class="mr-4" type="submit" :disabled="validateForm">Отправить</v-btn>
			</form>

			<h3 class="title">Комментарии</h3>

			<v-list three-line>
				<v-list-item
					v-for="comment in comments"
					:key="comment.title"
					class="comment mb-5"
				>
					<v-list-item-content>
						<v-list-item-title>{{ comment.user_name }}</v-list-item-title>
						<v-list-item-subtitle>{{ comment.comment }}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data: () => ({
		name: '',
		comment: ''
	}),

	methods: {
		async handleForm() {
			try {
				const user_name = this.name,
					  comment = this.comment

				await fetch(
					`http://demo-api.vsdev.space/api/articles/${this.article.id}/comments`, 
					{
						method: 'POST',
						body: JSON.stringify({ user_name, comment })
					}
				)

				this.$store.dispatch('article/fetchComments', this.article.id)

				this.name = ''
				this.comment = ''
			} catch (e) {
				console.log(e)
			}
		}
	},

	computed: {
		validateForm() {
			return this.name.length == 0 || this.comment.length == 0 || this.name.length > 10 || this.comment.length > 100
		},

		...mapGetters('article', {
			comments: 'getComments',
			article: 'getArticle'
		})
	},

	mounted() {
		this.$store.dispatch('article/initArticle', this.$route.params.id)
	}
}
</script>

<style scoped>
.comment {
	border: 1px solid #c1c1c1;
	border-radius: 5px;
}
</style>
