import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: JSON.parse(localStorage.getItem('isAuth')) || false,
    users: JSON.parse(localStorage.getItem('users')) || [],
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
        localStorage.setItem('users', JSON.stringify(allusers))
      }
    },
    signin: (state, user) => {
      const cUser = state.users.filter(cuser => cuser.email == user.email)
      console.log(JSON.parse(localStorage.getItem('users')))
      console.log(JSON.parse(localStorage.getItem('isAuth')))
      console.log(user.pass)
      if(cUser[0].email && cUser[0].pass === user.pass){
        state.isAuth = true
        localStorage.setItem('isAuth', JSON.stringify(true))
      } else {
        state.err = {msg: "the password or the email isn't correct !", id: 'login'}
      }
    },
    signout: (state) => {
      state.isAuth = false
      localStorage.removeItem('isAuth')
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
      console.log('done')
    }
  }
})
