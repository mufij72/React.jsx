
// import React, { useState } from 'react';

// const FunctionCalculator = () => {
//   const [num1, setNum1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [result, setResult] = useState(null);

//   const handleNum1Change = (e) => setNum1(e.target.value);
//   const handleNum2Change = (e) => setNum2(e.target.value);

//   const add = () => setResult(parseFloat(num1) + parseFloat(num2));
//   const subtract = () => setResult(parseFloat(num1) - parseFloat(num2));
//   const multiply = () => setResult(parseFloat(num1) * parseFloat(num2));
//   const divide = () => setResult(parseFloat(num1) / parseFloat(num2));

//   return (
//     <div>
//       <h2>Function-Based Calculator</h2>
//       <input
//         type="number"
//         value={num1}
//         onChange={handleNum1Change}
//         placeholder="Number 1"
//       />
//       <input
//         type="number"
//         value={num2}
//         onChange={handleNum2Change}
//         placeholder="Number 2"
//       />
//       <button onClick={add}>Add</button>
//       <button onClick={subtract}>Subtract</button>
//       <button onClick={multiply}>Multiply</button>
//       <button onClick={divide}>Divide</button>
//       <h3>Result: {result}</h3>
//     </div>
//   );
// };

// export default FunctionCalculator;



import React, { useState } from 'react'

export default function fuction() {

    const [num1,setnum1] =useState ("");
    const [num2,setnum2] =useState ("");
    const [result,setresult] =useState ("")


const handleChange1 =(e)=>setnum1 (e.target.value)
const handleChange2 =(e)=>setnum2 (e.target.value)

const add = ()=>setresult(parseFloat(num1)  + parseFloat(num2));
const sub = ()=>setresult(parseFloat(num1)  - parseFloat(num2));
const div = ()=>setresult(parseFloat(num1)  / parseFloat(num2));
const mult = ()=>setresult(parseFloat(num1)  * parseFloat(num2));


  return (
    <div>
       <from>
       <h2>Function-Based Calculator</h2>
       <input
       type='number'
       
       placeholder='enter num1'
       value={num1}
       onChange={handleChange1}
       
       />
       <input
       type='number'
       
       placeholder='enter num2'
       value={num2}
       onChange={handleChange2}
       
       />
       
       <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={div}>/</button>
        <button onClick={mult}>*</button>
        <h3>result:{result}</h3>
       </from>
    </div>
  )
}
