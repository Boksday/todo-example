<template>
    <div @click="checkTodo"
         class="todos"
         :class="{'end-todo': td.checked}">
        <div class="td">
            <span v-if="!updateMode">
                {{td.text}}
                <button @click.stop="toggleUpdateMode">수정</button>
            </span>
            <span v-else>
                <input @click.stop=""
                       @keypress.enter="updateOk"
                       v-model="updateText"
                       type="text">
                <button @click.stop="updateOk">확인</button>
            </span>

            <button @click.stop="deleteTodo">X</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  // props 타입까지 명시
  props: {
    td: Object,
    index: Number,
    todos: Array
  },
  data () {
    return {
      updateMode: false,
      updateText: this.td.text
    }
  },
  methods: {
    toggleUpdateMode () {
      this.updateMode = !this.updateMode
    },
    updateOk () {
      let params = {
        text: this.updateText,
        no: this.td.no
      }
      axios.get('http://localhost:8090/updateTodo', { params })
        .then((res) => {
          this.td.text = this.updateText
          this.updateText = this.td.text
          this.updateMode = !this.updateMode
        })
    },
    checkTodo () {
      let params = {
        no: this.td.no,
        checked: !this.td.checked
      }
      axios.get('http://localhost:8090/clickTodo', { params })
        .then((res) => {
          this.td.checked = !this.td.checked
        })
      console.log(this.td.checked)
    },
    deleteTodo () {
      axios.get('http://localhost:8090/deleteTodo', { params: { no: this.td.no } })
        .then((res) => {
          this.todos.splice(this.index, 1)
        })
    }
  }
}
</script>

<style scoped>
.td{
    user-select: none;
    cursor:pointer;
    width: 500px;
    height:25px;
    border: 1px solid black;
    border-collapse: collapse;
    margin: -1px 0;
    padding: 5px;
}
.todos{
    width:500px
}
.end-todo {
    text-decoration: line-through;
    color:#e2e2e2;
}
</style>
