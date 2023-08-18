import React from 'react'
import shoes1 from './shoes1.jpeg'
import { Link } from 'react-router-dom'
function Reebok() {
  return (
    <div>
       <img src={shoes1}  width={500} height={300} alt=''></img>
      <h3> Reebook </h3>
      <h2>specification</h2>
        <ul>
            <li>material : leather</li>
            <li>size : 10</li>
            <li>type: casual</li>
            <li>price : 4000</li>
        </ul>
        <h3><Link to='/Profiledetail/Fila'>Next</Link></h3>
    </div>
  )
}

export default Reebok
