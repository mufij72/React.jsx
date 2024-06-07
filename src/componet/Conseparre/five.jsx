import React from 'react'

export default function five() {
    const a =[10,20,30,40,50];
    const sum = a.reduce((a,sum)=>sum+a,0)
  return (
    <div>
      <h2>the sum all elements :{sum}</h2>
    </div>
  )
}
