const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    resolveLoader:{
        modules: ['node_modules', './src/loaders'], //node_modules找不到就去src/loaders中找
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {//use 默认去node_modules里找
                loader: 'replaceLoader',
                options: {
                    params: 'replaceString'
                }
            },
        }]
    }
}
