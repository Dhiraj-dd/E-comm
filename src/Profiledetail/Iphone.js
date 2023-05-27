import React from 'react'
import iphone from './iphone-14.jpeg'

import { Link } from 'react-router-dom'

function Iphone() {
  return (
    <div>
     <h3>14 pro max</h3>
        <img src={iphone} alt='iphone.14' width={600} height={400}></img>
        <h2>specification</h2>
        <ul>
            <li>    ram : 8gb</li>
            <li>    storage : 128 gb</li>
            <li>    camera : 32MP rear and 8MP front</li>
            <li>    display : 5.5inch</li>
            <li>gorilla glass</li>
            <li>1 year warranty</li>
        </ul>
        <h3><Link to='/Profiledetail/Iris'>Next</Link></h3>
        <h3><Link to='/Profiledetail/Samsung'>previous</Link></h3>
      
    </div>
  )
}

export default Iphone
