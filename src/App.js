//引入react核心库
  import React,{Component} from 'react'
//引入自己定义的组件
  import Add from './components/Add'
  import List from './components/List'
//定义组件，并暴露
  export default class App extends Component{
    state = {
      comments:[
        {id:001,username:'xiaokong',content:'react is bangbangda~~~~'},
        {id:002,username:'xiaozhang',content:'react is good~~~~'},
        {id:003,username:'xiaozhao',content:'react is difficult~~~~'}
      ]
    }
    //添加用户评论内容
    addComments = (commentObj)=>{
      //获取原状态
      const {comments} = this.state
      //更新状态
      this.setState({comments:[commentObj,...comments]})
    }
    //删除用户评论
    deleteComments = (id)=>{
      //获取原状态
      const {comments} = this.state
      comments.findIndex((commentObj) =>{
        return commentObj.id === id
      })
      comments.splice(index,1)
      //更新状态
      this.setState({comments})
    } 
    render(){
      return (
        <div id="app">
          <div>
            <header className="site-header jumbotron">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12">
                        <h1>请发表对React的评论</h1>
                      </div>
                    </div>
                  </div>
                </header>
              <div className="container">
                <Add addComments={this.addComments}/>
                <List comments={this.state.comments} deleteComments={this.deleteComments}/>
              </div>
          </div>
        </div>
      )
    }
  }
