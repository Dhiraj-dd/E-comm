import React from 'react'
import { Link } from 'react-router-dom'
import cloth2 from './cloth2.jpeg'
import cloth3 from './cloth3.jpeg'
function Clothing() {
  return (
    <div className='product'>
    <ul>
     <li><h4><Link to='/Profiledetail/Formal'>view </Link>
     <img src={cloth2} width={200} height={200}></img>
     </h4>
     </li>
     <li><h4><Link to='/Profiledetail/Casual'>view </Link>
     <img src={cloth3} width={200} height={200}></img>
     </h4>
     </li>
    
</ul>
    </div>
  )
}

export default Clothing
