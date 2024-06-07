// import React, { useState } from 'react'

// export default function obj() {
//     const [obj,setObj] =useState ({
//         name:"mufij",
//         age: 21,
//         vileje:"amrapar"

//     })
//     const updat =()=>{
//         setObj({...obj, name: "mohamd" })
//     };


//   return (
//     <div>
//       <h1> object in userdefide</h1>
//     <h2>{obj.name}</h2>
//     <h2>{obj.age}</h2>
//     <h2>{obj.vileje}</h2>
//     <button onClick={updat}>change</button>
//     </div>
//   )
// }

import React, { useState } from 'react';

export default function Obj() {
  
  const handleChange = (e) => {
    const { name, value, type , checked} = e.target;
    setObj({
      ...obj, [name]: type ==='checkbox'?checked:value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(obj);
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.redio1);
    console.log(obj.check1);
    console.log(obj.check2);
    console.log(obj.check3);
    setObj({
      name: "",
      email: "",
      redio1: "",
      check1: false,
      check2: false,
      check3: false
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter name'
          name='name'
          value={obj.name}
          onChange={handleChange}
        />
        <br />
        <input
          type='email'
          placeholder='Enter email'
          name='email'
          value={obj.email}
          onChange={handleChange}
        />
        <br />

        <input
          type='radio'
          name='redio1'
          value="html"
          checked={obj.redio1 === "html"}
          onChange={handleChange}
        />
        <label>HTML</label>
        <br />
        <input
          type='radio'
          name='redio1'
          value="css"
          checked={obj.redio1 === "css"}
          onChange={handleChange}
        />
        <label>css</label>
        <br />
        <input
          type='radio'
          name='redio1'
          value="javasript"
          checked={obj.redio1 === "javasript"}
          onChange={handleChange}
        />
        <label>javasript</label>
        <br />
        <input
          type='radio'
          name='redio1'
          value="react"
          checked={obj.redio1 === "react"}
          onChange={handleChange}
        />
        <label>react</label>
        <br />
        <br /><br />
        <h2>Checkbox</h2>
        <input
          type="checkbox"
          name="check1"          
          value={obj.check1}
          onChange={handleChange}
        />
        <label>Check me 1</label>
        <br />
        <input
          type="checkbox"
          name="check2"
          value={obj.check2}
          onChange={handleChange}
        />
        <label>Check me 2</label>
        <br />
        <input
          type="checkbox"
          name="check3"
          value={obj.check3}
          onChange={handleChange}
        />
        <label>Check me 3</label>
        <br />


        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

