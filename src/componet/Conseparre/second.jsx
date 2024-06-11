// import React from 'react'

// export default function second() {

//      const array=[1,2,3,4,5];
//      const square =array.map(num =>num*num)
//      const cube =array.map(num =>num*num*num)
//   return (
//     <div>
//       <h2> find square & cube of array elements</h2>
 
//       <div>
//         <h2>Original:</h2>
//         <p> {array.join(',')}</p>
//       </div>

//       <div>
//       <h2> square:</h2>
//       <p> {square.join(',')}</p>
//     </div>
//     <div>
//     <h2> cube:</h2>
//     <p> {cube.join(',')}</p>
//   </div>
//     </div>
//   )
// }

import React from 'react'

export default function second() {

  const arre=[2,4,6,8,10]
 const square=arre.map(square=>square*square)
 const cube=arre.map(cube=>cube*cube*cube)
  return (
    <div>
    <h2>Original</h2>
    <p>{arre.join(',')}</p>

    <h2>square</h2>
    <p>{square.join(',')}</p>

    <h2>cube</h2>
    <p>{cube.join(',')}</p>
    </div>
  )
}

