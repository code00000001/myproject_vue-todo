<template>
  <div class="todo-item">
    <input type="checkbox" />
    <!-- {{}}这个表达式就可以显示todo参数的内容了 -->
    <label>{{ todo.content }}</label>
    <button></button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  // 这里接收父组件传递过来的参数，todo
  props: {
    todo: Object,
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

.todo-item
  display: flex
  justify-content: space-between
  padding: 10px
  font-size 24px
  border-top 1px solid rgba(0,0,0,.1)

  &:hover
    button:after
      content:'X'
      font-size 24px
      color $lightred

  &.complated
    label
      color #d9d9dd
      text-decoration line-through

  input
    width 50px
    height 30px
    text-align center
    cleanDefaultStyle()
    &:after
      content: url('~images/unChecked.jpg')
    &:checked:after
      content:url('~images/Checked.jpg')

  label
    flex 1
    transition color 0.4s

  button
    width 40px
    background transparent
    cleanDefaultStyle()
    cursor pointer
</style>
