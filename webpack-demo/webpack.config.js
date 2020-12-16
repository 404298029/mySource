const path = require('path')
//添加新的入口文件，index.html还是会引用旧的，用它来解决(插件)
const HtmlWebpackPlugin = require('html-webpack-plugin');
//每次构建项目之前对dist文件夹进行清理操作
const CleanWebpackPlugin = require('clean-webpack-plugin');
var config = {
    entry: {
        app: './src/index.js',
        print: './src/print.js',
        myTest: './src/myselfTest.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'//express和webpack服务器之间的模块热替换
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),(有自己的测试文件，暂时注释改行)
        new HtmlWebpackPlugin({
            title: 'Output Management  (出口管理)'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            //对文字的处理
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            //加载数据对文件的处理
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}
module.exports = config;