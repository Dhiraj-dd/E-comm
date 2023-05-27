import React from 'react'
import shoes2 from './shoes2.jpeg'
import { Link } from 'react-router-dom'

function Fila() {
  return (
    <div>
      <img src={shoes2}  width={500} height={300}></img>
      <h3> fila</h3>
      <h2>specification</h2>
        <ul>
            <li>material : leather</li>
            <li>size : 10</li>
            <li>type: casual</li>
            <li>price : 4000</li>
        </ul>
        <h3><Link to='/Profiledetail/Puma'>Next</Link></h3>
        <h3><Link to='/Profiledetail/Reebok'>previous</Link></h3>

    </div>
  )
}

export default Fila
