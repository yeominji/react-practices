### ex06: React(JSX 기반) 애플리케이션으로 리팩토링: babel(transpile)


1. 프로젝트 생성 
```bash
$mkdir ex05
$ cd ex05
$npm init -y
$npm i -D webpack webpack-cli webpack-dev-sever babel-loader @babel/core @babel/preset-env @babel/preset-react
$npm i react react-dom

```
2. 프로젝트 디렉토리
   <pre>
     /ex04
        |--- package.json
        |--- package-lock.json
        |--- node-moudules
        |--- public
               |--- index.html
               |--- bundle.js [빌드 결과물]
        |---src       
               |-- App.js
               |--- index.js
        |--- webpack.config.js 
        |--- babel.config.js 
    </pre>     
3. scripts
```json
{
  "name": "ex04",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "dev-server.js",
  "scripts": {
      "start":"npx webpack serve --progress",
      "build":"npx webpack",
      "test": " "
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "^4.17.1"
  }
}
```

4. webpack.config.js
```javascript
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module:{
          rules:[{
               test:/\.js$/i,
               exclude:/node_modules/,
               loader:'babel-loader'

          }]
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
 
    }
}
```

5. babel.config.json
```json
{
    "presets": [["@babel/env",{
        "targets":{
            "ie":"11",
            "edge":"80",
            "firefox":"73",
            "chrome":"82",
            "opera":"69",
            "safari":"13"
        }
    }],"@babel/react"]
}
```
6. 빌드 (번들링)

  ```bash
  $npm run build
  
    ```
7. 테스트 서버 실행
```bash
$npm start
```
