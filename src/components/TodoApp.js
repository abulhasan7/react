import React, { Component } from 'react'
import TodoList from './TodoList'
export default class TodoApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[{value:'Todo 1'}],
            text:''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        console.log(`triggered ${e.target.value} at ${Date.now()}`)
        this.setState({text:e.target.value}, ()=>console.log(`setstate callback at ${e.target.value} at ${Date.now()}`))
        // this.setState({text:this.state.text+1}, ()=>console.log(`setstate callback at ${e.target.value} at ${Date.now()}`))

    }
    handleClick = ()=>{
        let item = {
            value: this.state.text
        }
        this.setState(prev=>{
            console.log(prev)
                return {
                    
            list: prev.list.concat(item),
            text:''
                }
        })
    }
  render() {
    return (
        <>
        <div>TodoApp</div>
        <TodoList list={this.state.list}/>
        <input onChange={this.handleChange} value={this.state.text}/>
        <input type="button" onClick={this.handleClick} value={"Add Todo #"+(this.state.list.length+1)}/>
      </>
    )
  }
}
