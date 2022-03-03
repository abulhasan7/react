import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    return (
        <ul>
      {this.props.list.map(elem => {
          console.log(elem);
           return <li>{elem.value}</li>
      })}
      </ul>
    )
  }
}
