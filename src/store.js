import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setTodos (state, payload) {
      state.todos = payload
    },
    addTodo (state, payload) {
      state.todos.push(payload)
    },
    setTodo (state, payload) {
      state.todos[payload.index].text = payload.text
    },
    checkTodo (state, payload) {
      state.todos[payload.index].checked = !state.todos[payload.index].checked
    },
    deleteTodo (state, payload) {
      state.todos.splice(payload.index, 1)
    }
  },
  actions: {
    completeTodo (context) {
      return axios.get('http://localhost:8090/completeTodo')
        .then((res) => {
          context.commit('setTodos', res.data)
        })
    },
    notYetTodo (context) {
      return axios.get('http://localhost:8090/notYetTodo')
        .then((res) => {
          context.commit('setTodos', res.data)
        })
    },
    allTodo (context) {
      return axios.get('http://localhost:8090/getTodos')
        .then((res) => {
          context.commit('setTodos', res.data)
        })
    },
    add (context, payload) {
      axios.get('http://localhost:8090/addTodo', {
        params: {
          text: payload,
          checkced: false
        }
      })
        .then((res) => {
          let todo = {
            no: res.data,
            text: payload,
            checked: false
          }
          context.commit('addTodo', todo)
        })
    },
    updateOkTodo (context, payload) {
      let params = { no: payload.no, text: payload.text }
      axios.get('http://localhost:8090/updateTodo', { params })
        .then((res) => {
          context.commit('setTodo', payload)
          return payload
        })
    },
    checkTodo (context, payload) {
      let params = { no: payload.no, checked: payload.checked }
      axios.get('http://localhost:8090/clickTodo', { params })
        .then((res) => {
          context.commit('checkTodo', payload)
        })
    },
    delete (context, payload) {
      let params = { no: payload.no }
      axios.get('http://localhost:8090/deleteTodo', { params })
        .then((res) => {
          context.commit('deleteTodo', payload)
        })
    }
  }
})
