<template>
	<v-app>
		<v-navigation-drawer
			v-model="drawer"
			:clipped="clipped"
			fixed
			app
		>
			<v-list>
				<v-list-item
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
				>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar :clipped-left="clipped" fixed app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title v-text="title" />
		</v-app-bar>
		<v-main>
			<Nuxt />
		</v-main>

		<v-footer :absolute="!fixed" app>
			<span>© {{ new Date().getFullYear() }} Новости</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	name: 'DefaultLayout',
	data() {
		return {
			title: 'Новости',
			clipped: false,
			drawer: true,
			fixed: false,
			items: [
				{
					icon: 'mdi-apps',
					title: 'Главная',
					to: '/'
				},
				{
					icon: 'mdi-newspaper-variant-outline',
					title: 'Новости',
					to: '/news'
				},
				{
					icon: 'mdi-image-filter-hdr',
					title: 'Галерея',
					to: '/gallery'
				}
			]
		}
	},

	async created() {
		await this.$store.dispatch('articles/fetchArticles')
	}
}
</script>


<style>
a {
    text-decoration: none;
}
</style>
