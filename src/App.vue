<template>
  <div>
    <!-- 组件MainHeader引入后就可以用在template的标签里了，命名是小驼峰加-的方式 -->
    <main-header></main-header>
    <main-todo></main-todo>
  </div>
</template>

<script>
import "./assets/styles/global.styl";

//导入子组件vue模块
import MainHeader from "./components/MainHeader.vue";
import MainTodo from "./components/MainTodo/MainTodo.vue";

export default {
  name: "App", //组件的名称
  //把导入的模块转成子组件
  components: {
    //组件名：组件对象
    MainHeader: MainHeader,
    //导入组件的简写，只要组件名=组件对象
    MainTodo,
  },
};
</script>

<style lang="stylus" scoped></style>
