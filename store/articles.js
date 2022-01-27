export const state = () => ({
	articles: []
})

export const mutations = {
	setArticles(state, payload) {
		state.articles = payload
	}
}

export const actions = {
	async fetchArticles({ commit }) {
		try {
			const response = await fetch('http://demo-api.vsdev.space/api/articles')
			const articles = await response.json()

			commit('setArticles', articles)
		} catch (e) {
			console.log(e)
		}
	}
}

export const getters = {
	getSliderArticles(state) {
		return state.articles.filter(article => article.slider)
	},

    getArticles(state) {
		return state.articles
	}
}