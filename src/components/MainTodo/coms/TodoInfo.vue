<template>
  <div class="todo-info">
    <span class="total">{{ total }} item left</span>
    <div class="tabs">
      <!-- 2、定义切换样式事件 -->
      <!-- 3、:class绑定样式 -->
      <a
        :class="['btn', 'primary', 'border', state == item ? 'actived' : '']"
        v-for="(item, index) in states"
        :key="index"
        @click="toggleState(item)"
        >{{ item }}</a
      >
    </div>
    <button class="btn info">Clear complated</button>
  </div>
</template>

<script>
export default {
  name: "TodoInfo",
  // props接收父组件传递过来的数据
  props: {
    total: Number,
  },
  data() {
    return {
      states: ["all", "active", "complated"],
      // 状态切换功能实现，1、设置states的默认样式all
      state: "all",
    };
  },
  methods: {
    toggleState(state) {
      this.state = state;
      // 4、触发方法$emit传递参数给父组件,方法名toggleState, 参数state
      this.$emit("toggleState", state);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/theme.styl'
@import '~styles/mixins.styl'

.todo-info
  display flex
  justify-content space-between
  font-weight 400
  line-height 30px
  padding 5px 10px
  border-top 1px solid rgba(0,0,0,0.1)

  .total
    color: $red
  .tabs
    display flex
    justify-content space-between
    width 300px

  .btn.primary.border
    primaryBorderBtn()
    &.actived
      primaryBtn()
  .btn.info
    infoBtn()
</style>
