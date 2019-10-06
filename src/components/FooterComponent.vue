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
const CONST_TEXT = {
  'all': '전체 할 일',
  'complete': '완료된 일',
  'notYet': '아직 못한 일'
}
export default {
  props: ['todos'],
  data () {
    return {
      text: CONST_TEXT.all
    }
  },
  methods: {
    completeTodo () {
      this.$emit('completeTodo')
      this.text = CONST_TEXT.complete
    },
    notYetTodo () {
      this.$emit('notYetTodo')
      this.text = CONST_TEXT.notYet
    },
    allTodo () {
      this.$emit('allTodo')
      this.text = CONST_TEXT.all
    }
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
