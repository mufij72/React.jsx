// import React, { useState } from 'react'

// function demo1() {
//     const [name ,setName]=useState("thor");
//     const [count ,setCount]=useState(0);
//     const [color ,setColor]=useState("red");

    
//   return (
//     <div>
//       <h1> useState hook</h1>
//       <h2>superHero-{name}</h2>
//       <button onClick={()=>setName("tony stre")}>changHero</button>
//       <hr/>
//       <h1> count :{count}</h1>
//       <button onClick={()=>setCount(count+1)}>+</button><br/>
//       <button onClick={()=>setCount(count-1)}>-</button>
//       <hr/>
//       <hr/>
//       <hr/>
//       <h1> my favrit color-{ color}</h1>
     
//       <button  onClick={()=>setColor('red')} style={{color: "red"}} >red</button>
//       <button onClick={()=>setColor("blue")} style={{color: "blue"}}>blue</button>
//       <button onClick={()=>setColor("green")} style={{color: "green"}}> green</button>
//       <button onClick={()=>setColor("yellow")} style={{color: "yellow"}}>yellow</button>

       

//     </div>
    
//   )
// }

// export default demo1
import React, { useState } from 'react'

export default function demo1() {
  const [name,setname] =useState ("THOR")
  const[count,setCount]=useState(0)
  const[color,setColor]=useState("")
  return (
    <div>
      <h1>useState</h1>
     <h2>hero name-{name}</h2>
     <button onClick={()=>setname("mufij")}>chenj</button>
     <hr/>
     <h2>count:{count}</h2>
     <button onClick={()=>setCount(count+1)}>+</button>
     <button onClick={()=>setCount(count-1)}>-</button>


     <h3>mu favrit color {color}</h3>
     <button onClick={()=>setColor("red")}>red</button>
     <button onClick={()=>setColor("yellow")}>yellow</button>
     <button onClick={()=>setColor("blue")}>blue</button>
    </div>


  )
}

