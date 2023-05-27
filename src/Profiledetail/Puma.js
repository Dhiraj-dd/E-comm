import React from 'react'
import shoes3 from './shoes3.jpeg'
import { Link } from 'react-router-dom'

function Puma() {
  return (
    <div>
      <img src={shoes3}  width={500} height={300}></img>
      <h3> Puma </h3>
      <h2>specification</h2>
        <ul>
            <li>material : leather</li>
            <li>size : 10</li>
            <li>type: casual</li>
            <li>price : 4000</li>
        </ul>
        <h3><Link to='/Profiledetail/Adidas'>Next</Link></h3>
        <h3><Link to='/Profiledetail/Fila'>previous</Link></h3>


    </div>
  )
}

export default Puma
