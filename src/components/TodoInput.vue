<template>
    <div class="input-wrapper">
      <input ref="todoInput"
             type="text"
             v-model="todo"
             @keypress.enter="addTodo"
             placeholder="할 일 입력">
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  // props 타입까지 명시
  props: {
    todos: Array
  },
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    ...mapActions(['add']),
    addTodo () {
      if (this.todo) {
        this.add(this.todo)
        this.todo = ''
      } else {
        alert('입력칸이 비어있습니다')
      }
      // ref로 바꿔보기
      this.$refs.todoInput.focus()
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
    input {
      width: 500px;
      height: 30px;
      font-size: 16px;
  }
</style>
