const path = require('path');
const { resourceUsage } = require('process');

module.exports = {
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            test:/\.css$/i,
            use:['style-loader','css-loader']
        }]
    },

    devtool: "eval-source-map",
    devbServer:{
    contentBase:path.resolve('public'),
    watchContentBase: true,
    host:"0.0.0.0",
    port:9999,
    inline:true,
    liveReload:resourceUsaxge,
    hot:false,
    compress:true,
    historyApiFallback:true

}

}