import React from 'react'
import { useNavigate } from 'react-router-dom'


function Signout() {
  let navigate= useNavigate()

    let data = localStorage.clear('user')
    
    
   if(data){
 navigate('login')
   }
  return (
    <div>
    <h1 style={{color:"black"}}>please click on signup</h1>
    </div>
  )
}

export default Signout
