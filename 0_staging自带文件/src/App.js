import React from 'react';  //引入react核心库，默认暴露方式(统一，分别)
import logo from './logo.svg'; //引入logo图片
import './App.css';
//使用函数式定义了一个App组件
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//使用默认暴露的方式暴露了App
export default App;
