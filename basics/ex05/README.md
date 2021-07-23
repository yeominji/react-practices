### ex05: React(API 기반) 애플리케이션으로 리팩토링


1. 프로젝트 생성 
```bash
$mkdir ex05
$ cd ex05
$npm init -y
$npm i -D webpack webpack-cli webpack-dev-sever
$npm i react react-dom
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
               |--- bundle.js [빌드 결과물]
        |---src       
               |-- App.js
               |--- index.js
        |--- webpack.config.js 
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
4.webpack.config.js
```javascript


5. 빌드 (번들링)

  ```bash
  $npm run build
  
    ```
6. 테스트 서버 실행
```bash
$npm start
```
