### ex04: 애플리케이션 번들링: webpack
1.webpack 은 작게 분리된 먾은 모듈들의 의존성을 분석하여 하나의 js 파일로 묶은 도구

2. 하나의 js 파일을 번들(buddle)이라 하고 묶는 작업을 번들링(bundling)이라고 한다.
3. 번들링은  단순히 모듈을 하나의 파일로 묶는 작업만을 의미 하는 것이 아니다.=> 애플리케이션 빌드 작업도 한다
4. 빌드 작업 : linting(ESLint,문법 체크) 작업, document 작업 (JsDoc)작업, testing(Mocha ,Jest) 작업 , 난독화/압축(Uglify) 작업 ,번들링
5. 자바스크립트 뿐만 아니라 다양한 애셋(image ,css ,font )들도 모듈로 취급하는 추상화 한다.







1. 프로젝트 생성 
```bash
$mkdir ex04
$ cd ex04
$npm init -y
$npm i -D webpack webpack-cli express
$npm .\node_moudules\.bon \webpack --version
(npx webpack --version) 
```
2. 프로젝트 디렉토리
   <pre>
     /ex04
        |--- package.json
        |--- package-lock.json
        |--- node-moudules
        |--- public
               |--- index.html
               |--- bundle.js
        |---src       
               |-- App.js
               |--- index.js
        |--- dev-server  
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
      "start":"node dev-server"
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
4. Application 작성
[public/index.html]
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Hello </title>
</head>
<body>
    <div id ='root'></div>  
    <script type ='moudule' src ='App.js'></script>  
    <script type ='moudule' src ='index.js'></script>  
</body>
</html>
```
[src/index.js]
```javascript

document
.getElementById('root')
.appendChild(App());

```
[src/App.js]
```javascript
import {App}from './App'
const App =function(){
    const app =document.createElement('h1');
    app.textContent='Hello World';
    return app;
}
export{App};
 
 
```

5. 빌드 (번들링)
    ```bash
    $npx webpack ./src/index.js -o ./public
  ```
  ```bash
  $npm run build
  
    ```
6. 테스트 서버 실행
```bash
$npm start
```
6. 결론
 - 프론트엔드 애플리케이션 수십 에서 수백 개의 모듈로 분리된 경우,
 브라우저에서 개별으로 이 모튤들을 import하는 것은 상당히 비효율적아다.
 -프론트엔드 애플리케이션은 자바스크립트 와에 다양한 애셋(css,inage,font)에 대한 로딩 동기화도 고려되어야 한다.