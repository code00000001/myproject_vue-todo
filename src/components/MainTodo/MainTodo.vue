<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to do?"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <!-- 父组件MainTodo.vue传递参数给子组件TodoItem.vue，通过 :todo="item"(item对象给到todo) ，然后子组件通过props接收参数-->
    <todo-item
      v-for="(item, index) in todoData"
      :key="index"
      :todo="item"
    ></todo-item>
  </div>
</template>

<script>
import TodoItem from "./coms/TodoItem.vue";
let id = 0;
export default {
  //引入子组件
  name: "MainTodo",
  data() {
    return {
      todoData: [],
      content: "",
    };
  },
  methods: {
    addTodo() {
      if (this.content === "") return;
      this.todoData.unshift({
        id: id++,
        content: this.content,
        complated: false,
      });
      this.content = "";
    },
  },
  //挂载组件
  components: {
    TodoItem: TodoItem,
  },
};
</script>

<style lang="stylus" scoped>
.main-todo
  margin 0 auto
  width 600px
  background-color #fff
  box-shadow 0 0 5px #666
  .add-todo
    padding 16px 16px 16px 36px
    width 160px
    font-size 24px
    font-weight inherit
    font-family inherit
    color inherit
    border none
    outline none
</style>
