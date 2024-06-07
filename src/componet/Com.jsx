// import React, { Component } from 'react';

import { RiFileFill } from "react-icons/ri";

// class ClassCalculator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       num1: '',
//       num2: '',
//       result: null,
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   add = () => {
//     this.setState({ result: parseFloat(this.state.num1) + parseFloat(this.state.num2) });
//   };

//   subtract = () => {
//     this.setState({ result: parseFloat(this.state.num1) - parseFloat(this.state.num2) });
//   };

//   multiply = () => {
//     this.setState({ result: parseFloat(this.state.num1) * parseFloat(this.state.num2) });
//   };

//   divide = () => {
//     this.setState({ result: parseFloat(this.state.num1) / parseFloat(this.state.num2) });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Class-Based Calculator</h2>
//         <input
//           type="number"
//           name="num1"
//           value={this.state.num1}
//           onChange={this.handleChange}
//           placeholder="Number 1"
//         />
//         <input
//           type="number"
//           name="num2"
//           value={this.state.num2}
//           onChange={this.handleChange}
//           placeholder="Number 2"
//         />
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.subtract}>Subtract</button>
//         <button onClick={this.multiply}>Multiply</button>
//         <button onClick={this.divide}>Divide</button>
//         <h3>Result: {this.state.result}</h3>
//       </div>
//     );
//   }
// }

// export default ClassCalculator;


import React, { Component } from 'react'

export default class Com extends Component {

   constructor(props) {
      super(props);
      this.state = {
         num1: "",
         num2: "",
          result: ""
      }
   }

   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })

   }

   add = () => {
      this.setState({ result: parseFloat(this.state.num1) + parseFloat(this.state.num2) })
   }
   sub = () => {
      this.setState({ result: parseFloat(this.state.num1) - parseFloat(this.state.num2) })
   }
   div = () => {
      this.setState({ result: parseFloat(this.state.num1) / parseFloat(this.state.num2) })
   }

   mult = () => {
      this.setState({ result: parseFloat(this.state.num1) * parseFloat(this.state.num2) })
   }
   render() {
      return (
         <div>

            <h1>class componet creat</h1>
            <from >
               <input
                  type="number"
                  name="num1"
                  value={this.state.num1}
                  onChange={this.handleChange}
                  placeholder="num 1"
               />
               <input
                  type="number"
                  name="num2"
                  value={this.state.num2}
                  onChange={this.handleChange}
                  placeholder="num2"
               />


               <button onClick={this.add}>+</button>
               <button onClick={this.sub}>-</button>
               <button onClick={this.div}>/</button>
               <button onClick={this.mult}>*</button>
               <h3>result:{this.state.result}</h3>


            </from>

         </div>
      )
   }
}
