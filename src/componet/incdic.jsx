import React, { useState } from 'react'

export default function incdic() {

  const [coun,setcout] =useState (0)

  const increment =()=>{
    setcout (coun+1)
  }
  const decriment=()=>{
    setcout(coun-1)
  }
  return (
    <div>
      <h2>Take 2 buttons one for increment & another for decrement & take one default counter 0.</h2>
    <p>count {coun}</p>
      <button style={{color: "green"}} onClick={increment}>increment</button>
      <button style={{color: "red"}}onClick={decriment}>decriment</button>
    </div>
  )
}
