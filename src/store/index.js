import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false,
    users: [],
    err: null
  },
  mutations: {
    signup: (state, user) => {
      state.errMsg = null
      const allusers = state.users
      const isExist = allusers.find(euser => euser.email == user.email)
      if(isExist){
        state.err = {msg: 'This user already exists 🤷🏼‍♀️', id: 'signup'}
        return false
      } else {
        allusers.push(user)
        state.users = allusers
        // localStorage.setItem('users', JSON.stringify(allusers))
      }
    },
    signin: (state, user) => {
      console.log(state);
      const cUser = state.users.filter(cuser => cuser.email == user.email)
      if(cUser[0].email && cUser[0].pass === user.pass){
        state.isAuth = true
        // localStorage.setItem('isAuth', JSON.stringify(true))
      } else {
        state.err = {msg: "the password or the email isn't correct !", id: 'login'}
      }
    },
    signout: (state) => {
      state.isAuth = false
      // localStorage.removeItem('isAuth')
    }
  },
  actions: {
    signup: (context, user) => {
      context.commit('signup', user)
    },
    signin: (context, user) => {
      context.commit('signin', user)
    },
    signout: (context) => {
      context.commit('signout')
    }
  },
  plugins: [new VuexPersistence().plugin]
})
