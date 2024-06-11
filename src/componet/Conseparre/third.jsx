// import React from 'react'

// export default function third() {
//     const array=[11,22,33,44,55]
//   return (
//     <div>
//       <h2> Display print :</h2>
//    <ul>
//    {array.map((item ,index)=>(
//     <li key={index}>{item}</li>
//    ))}
//    </ul>
//     </div>
//   )
// }
import React from 'react'

export default function third() {
  const aree =[10,20,30,40,50]

  return (
    <div>
      <h2>Display print</h2>
      { aree.map((item,index)=>(
          <div key={index}>{item}</div>
        ))
      }
    </div>
  )
}


