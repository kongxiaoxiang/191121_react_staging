//这是整个文件的入口文件,该文件需要渲染App
//引入react核心库
  import React from 'react'
//引入react-dom
  import ReactDOM from 'react-dom'
//引入App.js
  import App from './App'
//渲染组件
  ReactDOM.render(<App />,document.getElementById('root'))