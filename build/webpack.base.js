//导入path模块
const path = require('path')

//导入vue-loader的插件VueLoaderPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//导入HtmlWebpackPlugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')


//导出一个对象
module.exports = {
    //打包入口
    entry: './src/main.js',

    //打包出口
    output: {
        filename: 'main.js',
        //要用绝对路径, __dirname当前文件路径下的dist文件里，打包生成bundle.js，
        //然后就用npx webpack命令，这个命令的意思是在当前目录下去找node_modules里面的webpack去执行
        //然后webpack就是加载webpack.config.js， 根据指定的入口和出口，来生成对应的文件
        //或者在package.json里编写脚本命令，"build": webpack, 就可以用npm run build命令了
        path: path.resolve(__dirname, '../dist')
    },

    //配置打包规则module是个对象，rules是数组，因为打包规则有很多条,数组里是对象，每个对象就对应了一个打包规则
    //test，是一个正则表达式/\.vue&/，表示匹配以vue结尾的文件，如果遇到以vue结尾的文件，
    //我们会使用哪个loader去打包
    //配置好之后，在webpack里还需要去引入一个插件vue-loader
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limmit: 2048
                }
            }, {
                test: /\.css$/,
                //css-loader：把所有的css文件打包成一个文件
                //style-loader:讲css-loder打包后的文件挂载到页面head标签的style中
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.styl(us)?$/,
                //stylus: 将stylus文件编译成css格式
                //stylus-loader: 加载stylus文件，调用stylus预处理程序编译成css格式文件
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            }
        ]
    },

    //配置插件数组  
    plugins: [
        //实例化刚刚导入的插件对象
        new VueLoaderPlugin(),
        //实例化对象
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],

    //vue打包默认生成的是运行时版本文件vue.common.js，runtime only, 要改为编译xompiler和运行时runtimeonly文件，vue.js, 就要取一个别名
    //导入Vue包的时候去加载vue/dist/vue.js
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src'),
            'styles': path.resolve(__dirname, '../src/assets/styles')
        }
    }

}