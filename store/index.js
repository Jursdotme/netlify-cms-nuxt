export const state = () => ({
  blogPosts: [],
  authors: [],
  settings: [],
})

export const getters = {
  getPost: (state) => (slug) => {
    return state.blogPosts.find((blogPost) => blogPost.slug === slug)
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getBlogPosts')
    await dispatch('getAuthors')
    await dispatch('getSettings')
  },
  async getBlogPosts({ commit }) {
    const blogPostFiles = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )

    const blogPosts = blogPostFiles
      .keys()
      .map((key) => {
        const res = blogPostFiles(key)
        res.slug = key.slice(2, -5)
        return res
      })
      .sort(function (a, b) {
        // Sort posts by date, descending.
        return new Date(b.date) - new Date(a.date)
      })

    // Add author info to post
    const authorFile = require('~/assets/settings/authors.json')
    const authorList = authorFile.author
    blogPosts.forEach(function (post) {
      const authorObject = authorList.find(
        (author) => author.name === post.author
      )
      post.author = authorObject
    })

    await commit('setBlogPosts', blogPosts)
  },

  async getAuthors({ commit }) {
    const authorFile = require('~/assets/settings/authors.json')
    await commit('setAuthors', authorFile.author)
  },

  async getSettings({ commit }) {
    const settingsFile = require('~/assets/settings/settings.json')
    await commit('setSettings', settingsFile)
  },
}

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },

  setAuthors(state, data) {
    state.authors = data
  },
  setSettings(state, data) {
    state.settings = data
  },
}
