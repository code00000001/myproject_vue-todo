const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')

//导出一个对象
const prodConfig = {
    mode: 'production',
}

module.exports = merge(prodConfig, baseConfig)