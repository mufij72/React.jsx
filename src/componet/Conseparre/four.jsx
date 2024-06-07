import React from 'react'

export default function four() {

  const array = [10,20,30,40,50,60,70,80];
  const elementToFind =300;
  const yes=array.includes(elementToFind);
  return (
    <div>
      <h2> Check elements</h2>
      <div> 
      {
        yes?(
          <p>yes is found</p>
        ) : (<p>no is found</p>)
      }</div>
    </div>
  )
}
