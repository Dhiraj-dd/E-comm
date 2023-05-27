import React from 'react'
import { Link } from 'react-router-dom'
import iris from './iris.jpg'
import shoes from './shoes1.jpeg'
import cloth1 from './cloth1.jpeg'


function Profile() {
  return (
    <div className='product'>
    <ul>
   <li><Link to='/Products/Smartphone'>smartphone</Link><br/><img src={iris} width={200} height={200}></img></li>
     <li><Link to='/products/Footware'>footware</Link><br/><img src={shoes} width={200} height={200}></img></li>
     <li><Link to='/products/Clothing'>clothing</Link><br/><img src={cloth1} width={200} height={200}></img></li>
      </ul>
    </div>
  )
}

export default Profile
