import React, { Component } from 'react'
import Item from '../item'
import PubSub from 'pubsub-js'
export default class List extends Component {
  state = {
    userList:[], //用户列表
    isFirst:true, //是否为初始化界面
    isLoading:false, //初始化加载
    err:'' //错误信息
  }
  componentDidMount(){
    PubSub.subscribe('github',(msg,stateObj)=>{
      this.setState(stateObj)
    })
  }
  render() {
    const {userList,isFirst,isLoading,err} = this.state
    let content = ''
    if(isFirst) content = <h2>Welcome!输入关键字点击搜索~</h2>
    else if(isLoading) content = <h2>Loading...</h2>
    else if(err) content = <h2 style={{color:'red'}}>{err}</h2>
    else content = userList.map((userObj)=>{
      return <Item key={userObj.login} {...userObj}/>
    })
    return (
      <div>
        <div className="row">
          {content}
        </div>
      </div>
    )
  }
}
