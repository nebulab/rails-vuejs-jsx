const defaultState = {
  comments: []
}

export const actions = {
  fillComments({ commit }, comments) {
    commit('fillComments', comments)
  }
}

export const mutations = {
  fillComments(state, comments) {
    state.comments = comments
  }
}

export default {
  state: defaultState,
  actions,
  mutations
}
