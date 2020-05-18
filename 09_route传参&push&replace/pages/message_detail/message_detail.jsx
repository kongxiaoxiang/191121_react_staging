import React, { Component } from 'react'

export default class MessageDetail extends Component {
  state = {
    details:[
      {id:'001',title:'message001',content:'星守女团'},
      {id:'002',title:'message002',content:'破法战士'},
      {id:'003',title:'message003',content:'斗枪战士'}
    ]
  }
  render() {
    const {id} = this.props.match.params //获取路由传递过来的参数
    let result = this.state.details.find((detailObj)=>{
      return detailObj.id === id
    })
    return (
      <ul>
        <li>ID:{result.id}</li>
        <li>TITLE:{result.title}</li>
        <li>CONTENT:{result.content}</li>
      </ul>
    )
  }
}
