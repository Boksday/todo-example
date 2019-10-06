<template>
  <div id="app">
    <div class="title">Todos</div>
    <todo-input :todos="todos"></todo-input>
    <div class="todos-wrapper">
      <todo-element v-for="(td,index) in todos"
                      :key="index"
                      :td="td"
                      :index="index"
                      :todos="todos"></todo-element>
    </div>
    <todo-footer :todos="todos"
                      @completeTodo="completeTodo"
                      @notYetTodo="notYetTodo"
                      @allTodo="allTodo"></todo-footer>
  </div>
</template>

<script>
import axios from 'axios'
// 컴포넌트 네이밍 변경
import TodoElement from './components/TodoElement'
import TodoInput from './components/TodoInput'
import TodoFooter from './components/TodoFooter'

export default {
  components: {
    TodoElement, TodoInput, TodoFooter
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
