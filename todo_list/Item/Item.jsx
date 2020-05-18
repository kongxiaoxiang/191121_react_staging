import React,{Component} from 'react'
import './Item.css'
export default class Item extends Component{
  delete = (id) =>{
    if(confirm('是否要删除此评论？')){
      this.props.deleteComments({comments})
    }
  }
  render(){
    const {username,content} = this.props
    return(
      <li className="list-group-item">
        <div className="handle">
          <a onClick={this.delete} href="#1">删除</a>
        </div>
        <p className="user"><span >{username}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}