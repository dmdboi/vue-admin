import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarOpen: false
  },
  mutations: {
    openSidebar (state) {
      state.sidebarOpen = true 
    },
    closeSidebar (state) {
      state.sidebarOpen = false
    }
  },
  actions: {
    openSidebar (context) {
      context.commit('openSidebar')
    },
    closeSidebar (context) {
      context.commit('closeSidebar')
    }
  },
  modules: {
  }
})
