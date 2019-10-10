<template>
    <div @click="clickTodo"
         class="todos"
         :class="{'end-todo': todos[index].checked}">
        <div class="td">
            <span v-if="!updateMode">
                {{todos[index].text}}
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
import { mapState, mapActions } from 'vuex'
export default {
  // props 타입까지 명시
  props: {
    index: Number
  },
  computed: {
    ...mapState({
      todos: (store) => store.todos
    })
  },
  data () {
    return {
      updateMode: false,
      updateText: ''
    }
  },
  mounted () {
    this.updateText = this.todos[this.index].text
  },
  methods: {
    ...mapActions(['checkTodo', 'updateOkTodo', 'delete']),
    toggleUpdateMode () {
      this.updateMode = !this.updateMode
    },
    updateOk () {
      this.updateOkTodo({
        text: this.updateText,
        no: this.todos[this.index].no,
        index: this.index
      }).then(() => {
        this.updateMode = !this.updateMode
      })
    },
    clickTodo () {
      this.checkTodo({
        no: this.todos[this.index].no,
        checked: !this.todos[this.index].checked,
        index: this.index
      })
    },
    deleteTodo () {
      this.delete({
        no: this.todos[this.index].no, index: this.index
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
