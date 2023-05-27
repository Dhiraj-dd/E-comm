import React from 'react'
import shoes4 from './shoes4.jpeg'
import { Link } from 'react-router-dom'

function Adidas() {
  return (
    <div>
      <img src={shoes4}  width={500} height={300}></img>
      <h3> Adidas </h3>
      <h2>specification</h2>
        <ul>
            <li>material : leather</li>
            <li>size : 10</li>
            <li>type: casual</li>
            <li>price : 4000</li>
        </ul>
        <h3><Link to='/Profiledetail/Reebok'>Next</Link></h3>

        <h3><Link to='/Profiledetail/Puma'>previous</Link></h3>

    </div>
  )
}

export default Adidas
