import React from 'react'
import shoes1 from './shoes1.jpeg'
import shoes2 from './shoes2.jpeg'
import shoes3 from './shoes3.jpeg'
import shoes4 from './shoes4.jpeg'
import { Link } from 'react-router-dom'

function Footware() {
  return (
   
 <div className='product'>
    <ul>
     <li><h4><Link to='/Profiledetail/Reebok'>view Reebook</Link>
     <img src={shoes1} width={200} height={200}></img>
     </h4>
     </li>
     <li><h4><Link to='/Profiledetail/Fila'>view fila</Link>
     <img src={shoes2} width={200} height={200}></img>
     </h4>
     </li>
     <li><h4><Link to='/Profiledetail/Puma'>view puma </Link>
     <img src={shoes3} width={200} height={200}></img>
     </h4>
     </li>
     <li><h4><Link to='/Profiledetail/Adidas'>view adidas</Link>
     <img src={shoes4} width={200} height={200}></img>
     </h4>
     </li>
</ul>
    </div>
  )
}

export default Footware
