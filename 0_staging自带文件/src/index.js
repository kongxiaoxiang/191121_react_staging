//该文件是真个staging应用的入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  //引入所有组件的容器组件
//import * as serviceWorker from './serviceWorker'; //引入serviceWorker，做pwa，暂时不用

ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
