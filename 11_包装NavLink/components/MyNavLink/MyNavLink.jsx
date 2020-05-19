import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink activeClassName='demo' className="list-group-item" {...this.props}/>   
    )
  }
}
/*export default props => <NavLink activeClassName='demo' className="list-group-item" {...props}/>

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink 
        activeClassName='demo' 
        className="list-group-item" 
        to={this.props.to}
      >
        {this.props.children}
      </NavLink>
    )
  }
}

export default function MyNavLink(props) {
  return <NavLink activeClassName='demo' className="list-group-item" {...props}/>
}

高阶组件:
  1.是一个函数
  2.接收的参数是一个组件
  3.返回值是一个新组件
*/
