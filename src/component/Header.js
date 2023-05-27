import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
function Header() {
let author1 = localStorage.getItem('users')
let author2 = localStorage.getItem('user')
let navigate = useNavigate()
function logout(){
  localStorage.removeItem('users')
  navigate('/profile')

}
  return (
    <div>
     
 
 {
  
 !author2? <><Link to='login'>signup</Link></>:
!author1?<> <Link to='login1'>login</Link></>
 
 :


 
<> 
<ul className='link'>
<li> <Link to='/profile'>profile</Link></li>
<li> <Link to='/product'> add product</Link></li>
<li> <Link to='/delete'>delete product</Link></li>
<li> <Link to='/list'>list</Link></li>
<li> <Link onClick={logout} to='login1'>logout</Link></li>
<li> <Link to='signout'>signout</Link></li>
  </ul>
 </>
 }

 
 
 
   
    </div>
  )
}

export default Header
