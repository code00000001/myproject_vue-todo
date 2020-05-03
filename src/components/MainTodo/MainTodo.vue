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
      v-for="(item, index) in filterData"
      :key="index"
      :todo="item"
      @del="handleDeleteItem"
    ></todo-item>
    <!-- 父组件数据传递给子组件:total是定义在子组件里的变量，"total"是父组件里定义的变量 -->
    <todo-info
      :total="total"
      @toggleState="handleToggleState"
      @clearComplated="handleClear"
    ></todo-info>
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
      total: 0,
      // 子组件传递过来的参数默认为all
      filter: "all",
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
    handleToggleState(state) {
      this.filter = state;
    },
    handleClear() {
      this.todoData = this.todoData.filter((item) => item.complated == false);
    },
  },
  // 统计功能用到监听器watch
  watch: {
    todoData: {
      deep: true,
      // 当todoData数据变化的时候就会调用handler里的函数方法,再把数据传递给子组件
      handler() {
        // 过滤出所有没有完成的待办事项item =>
        this.total = this.todoData.filter(
          (item) => item.complated == false
        ).length;
      },
    },
  },
  computed: {
    //filterData返回todoData改变后的数据，根据filter的变化
    // 最后把todoData换成filterData
    filterData() {
      switch (this.filter) {
        case "all":
          return this.todoData;
          break;
        case "active":
          return this.todoData.filter((item) => item.complated == false);
          break;
        case "complated":
          return this.todoData.filter((item) => item.complated == true);
          break;
      }
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
