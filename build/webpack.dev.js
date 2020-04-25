const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
    //导出一个对象
const devConfig = {
    mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    //开发环境配置
    devServer: {
        contentBase: './dist',
        open: true,
        //热部署
        hot: true
    },


    //配置插件数组  
    plugins: [

        //实例化热部署插件(热模块替换)
        new webpack.HotModuleReplacementPlugin()
    ],
}

module.exports = merge(devConfig, baseConfig)