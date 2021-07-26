### ex03: 애플리케이션 분리2: ES6 모듈 시스템
1. 프로젝트 생성 
```bash
$mkdir ex03
$ cd ex03
$npm init -y
$npm i -D  express
```
2. 프로젝트 디렉토리
   <pre>
     /ex03
        |--- package.json
        |--- package-lock.json
        |--- node-moudules
        |--- public
               |--- index.html
               |-- App.js
               |--- index.js
        |--- dev-server  
    </pre>     
3. scripts
```json
{
  "name": "ex01",
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
[index.js]
```javascript
import {App}from './App.js'
document
.getElementById('root')
.appendChild(App());

```
[App.js]
```javascript

const App =function(){
    const app =document.createElement('h1');
    app.textContent='Hello World';
    return app;
}
export {App};


5. 테스트 (테스트 서버 실행)
    ```bash
    $npm start
  
    ```
6. 결론
 - 프론트엔드 애플리케이션 수십 에서 수백 개의 모듈로 분리된 경우,
 브라우저에서 개별으로 이 모튤들을 import하는 것은 상당히 비효율적아다.
 -프론트엔드 애플리케이션은 자바스크립트 와에 다양한 애셋(css,inage,font)에 대한 로딩 동기화도 고려되어야 한다.