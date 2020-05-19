import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Message from '../home_message/home_message'
import News from '../home_news/home_news'
import MyNavLink from '../../components/MyNavLink/MyNavLink'
export default class home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
              {/* <NavLink activeClassName='demo' className="list-group-item" to="/home/news">News</NavLink> */}
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
              {/* <NavLink activeClassName='demo' className="list-group-item" to="/home/message">Message</NavLink> */}
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    )
  }
}
