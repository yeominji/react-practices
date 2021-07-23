const path = require('path');
const { resourceUsage } = require('process');

module.exports = {
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
    devbServer:{
    contentBase:path.resolve('public'),
    host:"0.0.0.0",
    port:9999,
    inline:true,
    liveReload:resourceUsage,
    hot:false,
    compress:true,
    historyApiFallback:true

}

}