import React from 'react'

export default function six() {
    const a =[11,22,33,44,55,66,77,88,99]
    const Even =a.filter(a=>a%2===0)
    const odd =a.filter(a=>a%2!==0)
  return (
    <div>
      <h2>yhis a even and odd nume r</h2>
      <p>even number:{Even.join(',')}</p>
      <p>odd number:{odd.join(',')}</p>
    </div>
  )
}
