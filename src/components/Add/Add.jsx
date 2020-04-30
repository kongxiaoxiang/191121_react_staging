import React,{Component} from 'react'
import {v4 as uuidv4} from 'uuid'


export default class Add extends Component{
  //添加一条评论
  add = () =>{
    //获取输入框内容
    const {usernameNode,contentNode} = this.refs
    //检验内容
    if(!usernameNode.value || !usernameNode.value.trim() || 
    !contentNode.value || !contentNode.value.trim()){
      alert('评论内容不能为空~~~~~~')
      return
    }
    //更新内容
    this.props.addComments({
      id:uuidv4(),
      username:usernameNode.value,
      content:contentNode.value
    })
    //清空内容
    usernameNode.value = '',
    contentNode.value = ''
  }
  render(){
    return(
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input ref='usernameNode' type="text" className="form-control" placeholder="用户名" />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea ref='contentNode' className="form-control" rows="6" placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
            <button onClick={this.add} type="button" className="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}