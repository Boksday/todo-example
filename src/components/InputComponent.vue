<template>
    <div class="input-wrapper">
      <input id="todoInput"
             type="text"
             v-model="todo"
             @keypress.enter="addTodo"
             placeholder="할 일 입력">
    </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['todos'],
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo () {
      if (this.todo) {
        axios.get('http://localhost:8090/addTodo', {
          params: {
            text: this.todo,
            checkced: false
          }
        })
          .then((res) => {
            this.todos.push({
              no: res.data,
              text: this.todo,
              checked: false
            })
            this.todo = ''
          })
      } else {
        alert('입력칸이 비어있습니다')
      }
      document.getElementById('todoInput').focus()
    }
  }
}
</script>

<style scoped>
    .input-wrapper{
        margin-bottom: 5px;
    }
    input::placeholder{
        color: #e2e2e2
    }
</style>
