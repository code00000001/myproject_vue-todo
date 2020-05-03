<template>
  <div :class="['todo-item', todo.complated ? 'complated' : '']">
    <input type="checkbox" v-model="todo.complated" />
    <!-- {{}}这个表达式就可以显示todo参数的内容了 -->
    <label>{{ todo.content }}</label>
    <!-- 子组件传递方法传递参数到父组件,因为数据在父组件上，而触发方法在子组件上，所以要用到这种操作方式 -->
    <!-- 1、在子组件定义方法delItem -->
    <button @click="delItem"></button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  // 这里接收父组件传递过来的参数，todo
  props: {
    todo: Object,
  },
  methods: {
    delItem() {
      // 2、通过$emit触发一个事件del, 这个时间会在父组件上监听@del='handleDeleteItem', 并且传递参数this.todo.id, 这个todo实际上就是父组件传递过来的item
      this.$emit("del", this.todo.id);
    },
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
  border-top 1px solid rgba(0,0,0,0.1)

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
