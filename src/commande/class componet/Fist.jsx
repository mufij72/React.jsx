// import React, { Component } from 'react'

// export default class Fist extends Component {
//   constructor(){
//     super();
//     this.state={
//       name :"",
//       age :"",
//     }
//   }

//   handleform=(e)=>{
//     e.preventDefault();
//     console.log(this.state.name)
//     console.log(this.state.age)
//     this.setState=({
//       name : "",
//       age :  "",
//     })
//   }
//   render() {
//     return (
//       <div>
//       <form onSubmit={this.handleform}>
//         <h2>class feom creyt</h2>
//      <input type="text" placeholder="enter name" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/> 
// <br></br>
//         <input type="number" placeholder="enter age" value={this.state.age} onChange={(e)=>this.setState({age: e.target.value})}/> 

//         <button>submit</button>
//         </form>
//       </div>
//     )
//   }

// }

import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      check1: false,
      check2: false,
      check3: false,
      radio1:"",
    };
  }

  handleForm = (e) => {
    e.preventDefault();
    console.log(this.state.name);
    console.log(this.state.age);
    console.log(this.state.check1);
    console.log(this.state.check2);
    console.log(this.state.check3);
    console.log(this.state.radio1);
    this.setState({
      name: "",
      age: "",
      check1: false,
      check2: false,
      check3: false,
      radio1:"",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <h2>Class Form Create</h2>
          <input
            type="text"
            placeholder="Enter name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <br />
          <br />

          <input
            type="number"
            placeholder="Enter age"
            value={this.state.age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
          <br />
          <br />
          <input
            type="checkbox"
            name="check1"
            checked={this.state.check1}
            onChange={(e) => this.setState({ check1: e.target.checked })}
          />
          <label>chec me</label>
          <br />
          <br />
          <input
            type="checkbox"
            name="check2"
            checked={this.state.check2}
            onChange={(e) => this.setState({ check2: e.target.checked })}
          />
          <label>chec me</label>
          <br />
          <br />
          <input
            type="checkbox"
            name="check3"
            checked={this.state.check3}
            onChange={(e) => this.setState({ check3: e.target.checked })}
          />
          <label>chec me</label>
          <br />
          <br />


          <h2> redio button </h2>
          <input
          type="radio"
          name="radio1"
          value="html"
          checked={this.state.radio1 === "html"}
          onChange={(e) => this.setState({ radio1: e.target.value })}
        />
        <label>HTML</label>
        <br />
        <input
          type="radio"
          name="radio1"
          value="css"
          checked={this.state.radio1 === "css"}
          onChange={(e) => this.setState({radio1: e.target.value})}
        />
        <label>css</label>
        <br />
        <input
          type="radio"
          name="radio1"
          value="javascript"
          checked={this.state.radio1 === "javascript"}
          onChange={(e) => this.setState({radio1: e.target.value})}
        />
        <label>javascript</label>
        <br />
        <input
          type="radio"
          name="radio1"
          value="react"
          checked={this.state.radio1 === "react"}
          onChange={(e) => this.setState({radio1:e.target.value})}
        />
        <label>reactt</label>
        <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
