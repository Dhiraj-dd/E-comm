import React from 'react'
import s22 from './S22.webp'
import { Link } from 'react-router-dom'


function Samsung() {
  return (
    <div>
     <h3>S 22</h3>
        <img src={s22} alt='' width={600} height={400}></img>
        <h2>specification</h2>
        <ul>
            <li>    ram : 4gb</li>
            <li>    storage : 64 gb</li>
            <li>    camera : 32MP rear and 16MP front</li>
            <li>    display : 6inch</li>
            <li>gorilla glass</li>
            <li>1 year warranty</li>
        </ul>
        <h3><Link to='/Profiledetail/Iphone'>Next</Link></h3>
        <h3><Link to='/Profiledetail/Iris'>previous</Link></h3>

    </div>
  )
}

export default Samsung
