const actions = {
    loadbasemap: ({commit}) => {
        commit('loadbasemap');
    },
    loaduploadfeature: ({commit}, payload) => {
        commit('uploadfeature', payload)
    },
    commitloadfeatureUpdate: ({commit}, payload) => {
        commit('uploadfeatureupdate', payload)
    },
    commitfeatureUpdate: ({commit}, payload) => {
        commit('updateFeature', payload)
    },
    commitdrawGraphics: ({commit},payload) => {
        commit("drawGraphics",payload)
    }
}

export default actions;