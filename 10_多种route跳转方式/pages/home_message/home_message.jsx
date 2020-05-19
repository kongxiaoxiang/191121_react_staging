import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import MessageDetail from '../message_detail/message_detail'

export default class HomeMessage extends Component {
  state = {
    messages:[
      {id:'001',name:'消息001'},
      {id:'002',name:'消息002'},
      {id:'003',name:'消息003'}
    ]
  }
  push = (id)=>{
    this.props.history.push(`/home/message/detail/${id}`)
  }
  replace = (id)=>{
    this.props.history.replace(`/home/message/detail/${id}`)
  }
  back = ()=>{
    this.props.history.goBack()
  }
  forward = ()=>{
    this.props.history.goForward()
  }
  render() {
    return (
      <div>
        <ul>
         {
          this.state.messages.map((msgObj)=>{
           return (
            <li key={msgObj.id}>
              <Link replace={true} to={`/home/message/detail/${msgObj.id}`}>{msgObj.name}</Link>&nbsp;&nbsp;
              <button onClick={()=>{this.push(msgObj.id)}}>push查看</button>&nbsp;
              <button onClick={()=>{this.replace(msgObj.id)}}>replace查看</button>
            </li>
           )
          })
         }
        </ul>
        <button onClick={this.back}>后退</button>
        <button onClick={this.forward}>前进</button>
        <hr />
        <Route path="/home/message/detail/:id" component={MessageDetail}/>
      </div>
    )
  }
}
