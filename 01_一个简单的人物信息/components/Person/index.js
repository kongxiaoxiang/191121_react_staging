//定义一个人的组件信息 -----
//引入react核心库
  import React,{Component} from "react";
//定义组件
  export default class Person extends Component{
    render(){
      return(
        <ul>
          <li>姓名:'xiaokong'</li>
          <li>性别:男</li>
        </ul>
      )
    }
  }