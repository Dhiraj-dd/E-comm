import React from 'react'
import iphone from './iphone-14.jpeg'
import iris from './iris.jpg'
import s22 from './S22.webp'


import { Link } from 'react-router-dom'

function Smartphone() {
  return (
    <div className='product'>
    <ul>
     <li><h4><Link to='/Profiledetail/Iphone'>view iphone</Link>
     <img src={iphone} width={200} height={200} alt=''></img>
     </h4>
     </li>
     <li><h4><Link to='/Profiledetail/Iris'>view iris</Link>
     <img src={iris} width={200} height={200} alt=''></img>
     </h4>
     </li>
     <li><h4><Link to='/Profiledetail/Samsung'>view samsung</Link>
     <img src={s22} width={200} height={200} alt=''></img>
     </h4>
     </li>
</ul>
    </div>
  )
}

export default Smartphone
