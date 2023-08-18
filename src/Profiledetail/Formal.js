import React from 'react'
import cloth2 from './cloth2.jpeg'
function Formal() {
  return (
    <div>
       <img src={cloth2}  width={500} height={300} alt=''></img>
      <h3> jack and jones </h3>
      <h2>specification</h2>
        <ul>
            <li>material : cotton</li>
            <li>size : M & xL</li>
            <li>type: formal</li>
            <li>price : 4000</li>
        </ul>
    </div>
  )
}

export default Formal
