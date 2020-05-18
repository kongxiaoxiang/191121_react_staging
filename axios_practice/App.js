import React,{Component} from 'react'
import axios from 'axios'
export default class App extends Component{
  state = {
    respoName:'',
    respoUrl:'',
    isLoading:true,
    err:'',//错误信息
    keyWord:'r'
  }
  async componentDidMount(){
    const url = `https://api.github.com/search/repositories?q=${this.state.keyWord}&sort=stars`
    try {
      let result = await axios.get(url)
      const {name,html_url} = result.data.items[0]
      this.setState({respoName:name,respoUrl:html_url,isLoading:false})
    } catch (error) {
      this.setState({isLoading:false,err:error.message})
    }
  }
  render(){
    const {keyWord,respoUrl,respoName,err,isLoading} = this.state
    let content = ''
    if(isLoading) content = <h2>Loading...</h2>
    else if(err) content = <h2 style={{color:'red'}}>{err}</h2>
    else content = <h2>在github上面以【{keyWord}】字母开头的仓库，点赞量最多的是:<a href= {respoUrl}>{respoName}</a></h2>
    return content
  }
}