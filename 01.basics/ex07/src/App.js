import logo from './logo.svg';
import './App.css';
import React from 'React';

function App() {
  return (
    <div className={styles.App}>
      <header className={style['App-header']}>
        <img src={logo} className={style['App-logo']} alt="logo" />
        <p>
       React 1Week 과제 입니다.
        </p>
        <h1>Hello World</h1>
     </header>
    </div>
  );
}
export default App;