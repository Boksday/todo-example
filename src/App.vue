<template>
  <div id="app">
    <div class="title">Todos</div>
    <todo-input :todos="todos"></todo-input>
    <div class="todos-wrapper">
      <todo-element v-for="(_,index) in todos"
                      :key="index"
                      :index="index">
      </todo-element>
    </div>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
// 컴포넌트 네이밍 변경
import TodoElement from './components/TodoElement'
import TodoInput from './components/TodoInput'
import TodoFooter from './components/TodoFooter'
import { mapState } from 'vuex'

export default {
  components: {
    TodoElement, TodoInput, TodoFooter
  },
  computed: {
    ...mapState({
      todos: (store) => store.todos
    })
  },
  mounted () {
    this.$store.dispatch('allTodo')
  }
}
</script>

<style lang="scss">
  .title {
    font-size: 28px;
    font-weight: bold;
  }

  button{
    cursor: pointer
  }
</style>
