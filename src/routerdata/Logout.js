import React from 'react'
import { useNavigate } from 'react-router-dom'


function Logout() {
  let navigate= useNavigate()
  let a= localStorage.clear("user")
if(a){
  navigate('login')
}
  return (
    <div>
<h1>sign out user</h1>
    </div>
  )
}

export default Logout
