import React, { Component } from 'react'

export default class Mueu extends Component {

    constructor (){
        super();
        console.log('constructor calling.......')
        this.state={
            name :"raj",
        }
    }
componentDidMount(){
    console.log("mount......")
}
componentDidUpdate(){
    console.log("updet........")
}
  render() {
    console.log('render.......')
    return (
      <div>
        <h2> {this.state.name}</h2>
        <button onClick={()=>this.setState({name:"pushp Rj"})}>chenj</button>
      </div>
    )
  }
}
