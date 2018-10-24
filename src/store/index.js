import Vuex from 'vuex'
import Vue from 'vue'
import Api from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},

  mutations: {},

  getters: {},
  
  actions: {
    login ({state, commit}, { username, password}) {
      // Here the app asks the server to verify credentials
      return new Promise((resolve, reject) => {
        Api.login({ username, password })
          .then((resolve))
          .catch(reject)
      });
    }
  }
})

export default store