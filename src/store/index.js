import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: localStorage.getItem('users') || [],
    errMsg: null
  },
  mutations: {
    signup: (state, user) => {
      // const allusers = state.users
      // allusers.push(user)
      // localStorage.setItem('users', allusers)
      console.log(state.users + user)
    }
  },
  actions: {
    signup: (context, user) => {
      context.commit('signup', user)
    }
  }
})
