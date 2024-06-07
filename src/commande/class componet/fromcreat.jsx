import React from 'react'

export default function fromcreat() {
    let data="mufij";
    function updet(){
 data ="sarmin"
 alert(data)
    }

  return (
    <div>
      <h1> {data}</h1>
   <button onClick={updet}>updet data</button>
    </div>
  )
}
