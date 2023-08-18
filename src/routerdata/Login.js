import React from 'react'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

  function Login() {
    let [name,setname]= useState("")
    let [email,setemail]= useState("")
    let [password,setpassword]= useState("")
  let [error,seterror] = useState(false)

    let navigate = useNavigate()
    useEffect(()=>{
let author = localStorage.getItem('user')
//if(author){
  //navigate('/login1')
//}

    })
     
    async function getdata (){
      if(!name || !email || !password){
        seterror(true)
        return false 
      }
 let result = await fetch("http://localhost:4400", {
    method:"post",
    body: JSON.stringify({name,email,password}),
    headers:{"Content-type": "application/json"}
  })
result = await result.json()
console.log(result)
localStorage.setItem('user',JSON.stringify(result))

navigate("/login1")
    }
  
   
  return (
    <div className='login'>
      <input type='text' placeholder='name' value={name} style={{border:'2px solid blue' }}
       onChange={(e)=>{setname(e.target.value)}}/><br/>
   {error && !name && <span > please enter name</span>}<br/>
      <input type='text' placeholder='email' style={{border:'2px solid blue' }} value={email}
       onChange={(e)=>{setemail(e.target.value)}}/><br/>
 {error && !email && <span > please enter name</span>}<br/>
      <input type='password' placeholder='password' value={password} style={{border:'2px solid blue' }}
       onChange={(e)=>{setpassword(e.target.value)}}/><br/>
 {error && !password && <span > please enter name</span>}<br/>
      <button type='button' onClick={getdata}  style={{border:'2px solid red' }}>signup</button>
      
    </div>
  )
}

export default Login
