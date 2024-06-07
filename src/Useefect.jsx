import React, { useEffect, useState } from 'react'

export default function Useefect() {
    const [count,setcount ] = useState(5)
    const [count1,setcount1 ] = useState(10)

    useEffect(()=>{
        console.log("mounting.........")

        return function(){
          console.log("unmountion......")
        }
    },[])
  
    useEffect(()=>{
      console.log("upde............")
    },[count1])
    
  return (
    <div>
      
    <h1>count:{count}</h1>
    <button onClick={()=>setcount(count+1)}>count</button>
    <h1>count1:{count1}</h1>
    <button onClick={()=>setcount1(count1+4)}>count</button>
    </div>
  )
}
