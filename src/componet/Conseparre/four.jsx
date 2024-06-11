// import React from 'react'

// export default function four() {

//   const array = [10,20,30,40,50,60,70,80];
//   const elementToFind =30;
//   const yes=array.includes(elementToFind);
//   return (
//     <div>
//       <h2> Check elements</h2>
//       <div> 
//       {
//         yes?(
//           <p>{elementToFind}:yes is found</p>
//         ) : (<p>{elementToFind}:no is found</p>)
//       }</div>
//     </div>
//   )
// }
import React from 'react'

export default function four() {
  const arre =[10,20,30,40,50,60,70]
  const find =30;
  const chek=arre.includes(find);

  return (
    <div>
      <h2>chek the elements</h2>
      {
        chek?(<p>{find}:yes is found</p>):(<p>{find}:no is found</p>)
      }
    </div>
  )
}
