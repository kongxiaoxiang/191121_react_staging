import React, { Component } from 'react'
import MyButton from './components/Button/Button'
import {Button,DatePicker} from 'antd'

const { RangePicker } = DatePicker;

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <MyButton>点我</MyButton>
        <MyButton>点我啊</MyButton>
        <Button type="primary">antd按钮</Button>
        <RangePicker />
      </div>
    )
  }
}
