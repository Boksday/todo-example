<template>
  <div id="app">
    <div class="title">Todos</div>
    <input-component :todos="todos"></input-component>
    <div class="todos-wrapper">
      <todo-component v-for="(td,index) in todos"
                      :key="index"
                      :td="td"
                      :index="index"
                      :todos="todos"></todo-component>
    </div>
    <footer-component :todos="todos"
                      @completeTodo="completeTodo"
                      @notYetTodo="notYetTodo"
                      @allTodo="allTodo"></footer-component>
  </div>
</template>

<script>
import axios from 'axios'
import TodoComponent from './components/TodoComponent'
import InputComponent from './components/InputComponent'
import FooterComponent from './components/FooterComponent'

export default {
  components: {
    TodoComponent, InputComponent, FooterComponent
  },
  data () {
    return {
      todos: []
    }
  },
  mounted () {
    axios.get('http://localhost:8090/getTodos')
      .then((res) => {
        this.todos = res.data
      })
  },
  methods: {
    completeTodo () {
      axios.get('http://localhost:8090/completeTodo')
        .then((res) => {
          this.todos = res.data
        })
    },
    notYetTodo () {
      axios.get('http://localhost:8090/notYetTodo')
        .then((res) => {
          this.todos = res.data
        })
    },
    allTodo () {
      axios.get('http://localhost:8090/getTodos')
        .then((res) => {
          this.todos = res.data
        })
    }
  }
}
</script>

<style lang="scss">
  .title {
    font-size: 28px;
    font-weight: bold;
  }

  #todoInput {
    width: 500px;
    height: 30px;
    font-size: 16px;
  }
  button{
    cursor: pointer
  }
</style>
