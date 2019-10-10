<template>
    <div class="footer-wrapper">
            <div>{{text}} : {{todos.length}}개</div>
            <div>
                <button @click="allTodo">전체 일</button>
                <button @click="completeTodo">완료된 일</button>
                <button @click="notYetTodo">아직 못한 일</button>
            </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
const CONST_TEXT = {
  'all': '전체 할 일',
  'complete': '완료된 일',
  'notYet': '아직 못한 일'
}
export default {
  // props 타입까지 명시
  data () {
    return {
      text: CONST_TEXT.all
    }
  },
  computed: {
    ...mapState({
      todos: store => store.todos
    })
  },
  methods: {
    ...mapActions({
      completeTodo: 'completeTodo',
      notYetTodo: 'notYetTodo',
      allTodo: 'allTodo'
    })
  }
}
</script>

<style scoped>
    .footer-wrapper {
        margin-top: 5px;
        border: 1px solid black;
        width: 500px;
        line-height: 30px;
        padding:5px;
    }
</style>
