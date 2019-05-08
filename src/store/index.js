import Vuex from "vuex";
import Vue from "vue";
import Api from "@/api";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    currentUser: null
  },

  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
    logout(state) {
      state.currentUser = null;
    }
  },

  getters: {},

  actions: {
    login({ state, commit, dispatch }, { username, password }) {
      // Here the app asks the server to verify credentials
      return new Promise((resolve, reject) => {
        Api.login({ username, password })
          .then(currentUser => {
            commit("setCurrentUser", currentUser);

            //  then sing in with the sessionToken
            dispatch("loginWithSessionToken", currentUser.sessionToken)
              .then(res => {
                if (res.data.success) {
                  resolve(currentUser);
                } else {
                  reject({ message: "cant set session token" });
                }
              })
              .catch(reject);
          })
          .catch(reject);
      });
    },

    loginWithSessionToken({ state, commit }, sessionToken) {
      return new Promise((resolve, reject) => {
        Api.loginWithSessionToken({ sessionToken })
          .then(res => {
            resolve(res);
          })
          .catch(reject);
      });
    },

    registerAccount(
      { state, commit, dispatch },
      { username, password, role, fullname, email }
    ) {
      return new Promise((resolve, reject) => {
        Api.registerAccount({ username, password, role, fullname, email }).then(
          serverResponse => {
            console.log({ serverResponse });
            resolve({ username });
          }
        );
      });
    }
  }
});

export default store;
