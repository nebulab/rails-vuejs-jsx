import api from '../../api'
import { parseError } from '../../api/utils'

const defaultState = {
  comments: [],
  errors: {
    comments: []
  }
}

export const actions = {
  fillComments({ commit }, comments) {
    commit('fillComments', comments)
  },
  addComment({ commit }, { productId, commentParams }) {
    commit('commentRequestStart')

    api.comment.create(productId, commentParams)
      .then((comment) => {
        commit('commentAdded', comment)
      })
      .catch((error) => {
        commit('commentRequestFailed', parseError(error))
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
  },

  commentRequestStart(state) {
    state.errors.comments = []
  },
  commentRequestFailed(state, errors) {
    state.errors.comments = errors
  }
}

export default {
  state: defaultState,
  actions,
  mutations
}
