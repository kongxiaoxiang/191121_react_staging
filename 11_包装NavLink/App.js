import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import About from './pages/about/about'
import Home from './pages/home/home'
import Demo from './components/demo/demo'
import MyNavLink from './components/MyNavLink/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 之前使用的是a标签点击跳转 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
              {/* <NavLink activeClassName='demo' className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName='demo' className="list-group-item" to="/home">Home</NavLink>  */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 路径和组件的对应关系 */}
                <Switch>
                  {/* <Route path="/about" exact component={About}/> 
                  <Route path="/about/a" component={Demo}/> exact 开启严格模式*/}
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/demo" component={Demo}/>
                  <Redirect  to="/Demo"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
/*
  路由组件的props比一般组件多了三个属性:
    1.history :路径和跳转相关
    2.location : history.location
    3.match : 传递参数相关
*/