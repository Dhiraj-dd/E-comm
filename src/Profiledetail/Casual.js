import React from 'react'
import cloth3 from './cloth3.jpeg'
function Casual() {
  return (
    <div>
        <img src={cloth3}  width={500} height={300} alt=''></img>
      <h3> puma</h3>
      <h2>specification</h2>
        <ul>
            <li>material : cotton</li>
            <li>size : M & xL</li>
            <li>type: casual</li>
            <li>price : 4000</li>
        </ul>
    </div>
  )
}

export default Casual
