<template>
    <div>this is App</div>    
</template>

<script>
//测试webpack打包遇到导入的是图片文件是怎么处理的
import img from './assets/images/bg.jpg'

import './assets/images/checked.svg'

export default {
    name: 'App', //组件的名称
    //测试导入的图片文件
    created(){
        console.log(img)
    }
}
</script>

<style scoped>

</style>