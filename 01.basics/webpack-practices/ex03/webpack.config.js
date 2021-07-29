const path = require('path');
const { resourceUsage } = require('process');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
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