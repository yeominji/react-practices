### ex02: 애플리케이션 분리1
1. 프로젝트 생성 
```bash
$mkdir ex02
$ cd ex02
$npm init -y
$npm i -D  express
```
2. 프로젝트 디렉토리
   <pre>
     /ex02
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


5. 테스트 (테스트 서버 실행)
    ```bash
    $npm start
  
    ```
6. 결론
 - DOM API 를 직접 자바스크립트 코드로 호출
 - 주로 DOM 조작에 특화 jQery아 같은 라이브러리를 활용한다
 - 장점은 작성된 애플리케이션 코드의 전달이 쉽다.(작성된 대로)# react-practices
