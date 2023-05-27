import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
function Hide2 (){
    
    let author = localStorage.getItem('users')

 return author? <Outlet/>: <Navigate to='login1'/> 

}
   
   
 





export default Hide2