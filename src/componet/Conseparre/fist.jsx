// import React, { useState } from 'react'

// export default function fist() {
//   const [circleRadius, setCircleRadius] = useState("")
//   const [rectangleLength, setRectangleLength] = useState("")
//   const [rectangleLwhith, setRectangleLwhith] = useState("")
//   const [triangleBase, setTriangleBase] = useState("")
//   const [triangleHeight, setTriangleHeight] = useState("")


//   const calculateCircleArea =Radius=> Math.PI *Radius*Radius
//   const calculateRectangleArea = (length, width) => length * width;
//   const calculateTriangleArea = (base, height) => 0.5 * base * height;
//   return (
//     <div>
//       <from>
//         <div>
//           <h3>Circle</h3>
//           <input
//             type="number"
//             placeholder="Radius"
//             value={circleRadius}
//             onChange={(e) => setCircleRadius(parseFloat(e.target.value))}
//           />
//           <p>Area: {calculateCircleArea(circleRadius)}</p>
//         </div>

//         <div>
//           <h3>Rectangle</h3>
//             <input
//               type="number"
//               placeholder="Length"
//               value={rectangleLength}
//               onChange={(e) => setRectangleLength(parseFloat(e.target.value))}
//             />





//             <input
//               type="number"
//               placeholder="whith"
//               value={rectangleLwhith}
//               onChange={(e) => setRectangleLwhith(parseFloat(e.target.value))}
//             />
//             <p>Area: {calculateRectangleArea(rectangleLwhith,rectangleLength)}</p>

//             </div>

//             <div>
//           <h3>Triangle</h3>
//             <input
//               type="number"
//               placeholder="Base"
//               value={triangleBase}
//               onChange={(e) => setTriangleBase(parseFloat(e.target.value))}
//             />





//             <input
//               type="number"
//               placeholder="Height"
//               value={triangleHeight}
//               onChange={(e) => setTriangleHeight(parseFloat(e.target.value))}
//             />
//             <p>Area: {calculateRectangleArea(triangleBase,triangleHeight)}</p>

//             </div>

//       </from>
//     </div>
//   )
// }

import React, { useState } from 'react'

export default function fist() {
  const [circle, setcircal] = useState("")
  const [rectangleLength, setRectangleLength] = useState("")
  const [rectangleLwhith, setRectangleLwhith] = useState("")
  const [triangleBase, setTriangleBase] = useState("")
  const [triangleHeight, setTriangleHeight] = useState("")


  const areacircleredis =Radius=> Math.PI *Radius*Radius
     const calarearectan= (length, width) => length * width;
     const calarewtriangle = (base, height) => 0.5 * base * height;

  return (
    <div>
      <from>
        <div>
          <input
            type='number'
            placeholder='Radius'
            value={circle}
            onChange={(e) => setcircal(parseFloat(e.target.value))}
          />
          <p>Area :{areacircleredis(circle)}</p>
        </div>
        <div>
          <input
            type='number'
            placeholder='length'
            value={rectangleLength}
            onChange={(e) => setRectangleLength(parseFloat(e.target.value))}
          />
          <input
            type='number'
            placeholder='width'
            value={rectangleLwhith}
            onChange={(e) => setRectangleLwhith(parseFloat(e.target.value))}

          />
          <p>Area:{calarearectan(rectangleLength,rectangleLwhith)}</p>
        </div>

        <div>
        <input
          type='number'
          placeholder='Base'
          value={triangleBase}
          onChange={(e) => setTriangleBase(parseFloat(e.target.value))}
        />
        <input
          type='number'
          placeholder='height'
          value={triangleHeight}
          onChange={(e) => setTriangleHeight(parseFloat(e.target.value))}

        />
        <p>Area:{calarewtriangle(triangleBase,triangleHeight)}</p>
      </div>


      </from>
    </div>
  )
}
