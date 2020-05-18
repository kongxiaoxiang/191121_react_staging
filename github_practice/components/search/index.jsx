import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  inputRef = React.createRef()
  search = async ()=>{
    const {updateAppState} = this.props
    //获取用户输入数据
    const {value} = this.inputRef.current
    //校验数据
    if(!value || !value.trim()){
      alert('请输入正确的格式~~~~~~')
      return
    }
    //发送ajax请求(axios)
    const url = `https://api.github.com/search/users?q=${value}`
    //用户发送请求前更新App状态
    updateAppState({isFirst:false,isLoading:true})
    try {
      let result = await axios.get(url)
      const {items} = result.data //用户数组
      updateAppState({isLoading:false,userList:items})
    } catch (err) {
      updateAppState({isLoading:false,err:err.message})
    }
  }
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input ref={this.inputRef} type="text" placeholder="enter the name you search"/>&nbsp;
            <button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    )
  }
}
