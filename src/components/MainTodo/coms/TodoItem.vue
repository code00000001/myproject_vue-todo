<template>
  <div class="todo-item">
    <input type="checkbox" />
    <label>todo1</label>
    <button></button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
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
