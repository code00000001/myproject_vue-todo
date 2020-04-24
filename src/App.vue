<template>
  <div>
    <h1>ToDoList</h1>
    <input type="text" v-model="content" />
    <button @click="addContent">添加</button>
    <ul>
      <li v-for="(item, index) in todoData" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
//测试webpack打包遇到导入的是图片文件是怎么处理的
// import img from './assets/images/bg.jpg'

// import './assets/images/checked.svg'

// import './assets/styles/test.css'

import "./assets/styles/global.styl";

export default {
  name: "App", //组件的名称
  //测试导入的图片文件
  data() {
    return {
      todoData: ["todo1", "todo2", "todo3"],
      content: ''
    };
  },
  methods: {
    addContent() {
        if(this.content === '') return
        this.todoData.push(this.content)
        this.content = ''
    },
  },
};
</script>

<style lang="stylus" scoped>
h1
    color: red
li:nth-of-type(odd)
    color: blue
</style>
