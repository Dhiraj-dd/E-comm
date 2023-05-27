import React from 'react'
import iris from './iris.jpg'
import { Link } from 'react-router-dom'

function Iris() {
  return (
    <div>
      
      <img src={iris} alt='lava.iris' width={500} height={300}></img>
      <h3> 9 prime</h3>
      <h2>specification</h2>
        <ul>
            <li>ram : 2gb</li>
            <li>storage : 32 gb</li>
            <li>camera : 8MP rear and 5MP front</li>
            <li>display : 5inch</li>
            <li>1 year warranty</li>
        </ul>
        <h3><Link to='/Profiledetail/Samsung'>Next</Link></h3>
        <h3><Link to='/Profiledetail/Iphone'>previous</Link></h3>

    </div>
  )
}

export default Iris
