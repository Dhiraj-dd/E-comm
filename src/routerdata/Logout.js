import React from 'react'
import { useNavigate } from 'react-router-dom'


function Logout() {
  let navigate= useNavigate()
  let a= localStorage.clear("users")
if(a){
  navigate('login')
}
  return (
    <div>
<h1>log out user</h1>
    </div>
  )
}

export default Logout
