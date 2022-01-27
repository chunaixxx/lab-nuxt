export const state = () => ({
	article: {},
    comments: []
})

export const mutations = {
    setArticle(state, payload) {
        state.article = payload
    },

    setComments(state, payload) {
        state.comments = payload
    }
}

export const actions = {
    initArticle({ dispatch }, id) {
        dispatch('fetchArticle', id)
        dispatch('fetchComments', id)
    },

    async fetchArticle({ commit }, id) {
        try {
            const response = await fetch(`http://demo-api.vsdev.space/api/articles/${ id }`)
            const article = await response.json()

            commit('setArticle', article)            
        } catch (e) {
            console.log(e)
        }
    },

    async fetchComments({ commit }, id) {
        try {
            const response = await fetch(`http://demo-api.vsdev.space/api/articles/${ id }/comments`)
            const comments = await response.json()

            commit('setComments', comments)            
        } catch (e) {
            console.log(e)
        }
    }
}

export const getters = {
    getArticle(state) {
        return state.article
    },
    
    getComments(state) {
        return [...state.comments].reverse()
    }
}