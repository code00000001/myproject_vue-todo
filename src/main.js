//1.创建Vue根实例
import Vue from 'vue'

//导入App组件
import App from './App.vue'

new Vue({
    el: '#app',
    //挂载局部组件到Vue根实例,通过components对象
    components: {
        //组件名：组件对象
        App: App
    },
    //有了组件之后就可以渲染标签
    template: '<App/>'
})


//2.挂载App组件