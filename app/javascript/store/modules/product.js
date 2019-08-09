import api from '../../api'

const defaultState = {
  comments: []
}

export const actions = {
  fillComments({ commit }, comments) {
    commit('fillComments', comments)
  },
  addComment({ commit }, { productId, commentParams }) {
    api.comment.create(productId, commentParams)
      .then((comment) => {
        commit('commentAdded', comment)
      })
  },
  cancelComment({ commit }, commentId) {
    api.comment.destroy(commentId)
      .then(() => {
        commit('commentCancelled', commentId)
      })
  }
}

export const mutations = {
  fillComments(state, comments) {
    state.comments = comments
  },
  commentAdded(state, comment) {
    state.comments.push(comment)
  },
  commentCancelled(state, commentId) {
    state.comments = state.comments.filter(comment => commentId !== comment.id)
  }
}

export default {
  state: defaultState,
  actions,
  mutations
}
