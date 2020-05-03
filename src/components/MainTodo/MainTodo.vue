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
    <!-- 3、在同一个地方，监听子组件传递过来的事件del， 在这里的方法实际上可以省略写（）的，只要在methods里定义的时候用（）接收即可 -->
    <todo-item
      v-for="(item, index) in todoData"
      :key="index"
      :todo="item"
      @del="handleDeleteItem"
    ></todo-item>
    <todo-info></todo-info>
  </div>
</template>

<script>
import TodoItem from "./coms/TodoItem.vue";
import TodoInfo from "./coms/TodoInfo.vue";
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

    handleDeleteItem(id) {
      // 4、接收id,删除todoData里的元素
      // 5、this.todoData.findIndex找到数组下标
      // item => es6回调函数的写法，如果item.id ===传递过来的id,就找到了索引下标，然后删除一个元素
      this.todoData.splice(
        this.todoData.findIndex((item) => item.id === id),
        1
      );
    },
  },
  //挂载组件
  components: {
    TodoItem: TodoItem,
    TodoInfo: TodoInfo,
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
