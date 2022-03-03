import React, { Component } from 'react'

export default class Tick extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter:0
        }
        this.handleIncrement = this.handleIncrement.bind(this);
    }
  handleIncrement(){
    this.setState({counter:this.state.counter+1});
  }

  componentDidMount(){
    this.interval = setInterval(this.handleIncrement,1000)
  }
  shouldComponentUpdate(){
    return true;
  }
  componentDidUpdate(){

  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>
        No of Seconds: {this.state.counter}
        {/* <div>
          <button onClick={this.handleIncrement}>Start Timer</button>
        </div> */}
      </div>
    )
  }
}
