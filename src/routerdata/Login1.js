import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login1 (){

    let [email,setemail]= useState("")
    let [password,setpassword]= useState("")
  let [error,seterror] = useState(false)

    let navigate = useNavigate()

    useEffect(()=>{

        let auth = localStorage.getItem('users')
        if(auth){
            navigate('/profile')
        }
    })
    
   async function submitform (){
    if( !email || !password){
        seterror(true)
        return false 
      }
let data = await fetch("http://localhost:4400/login1",{
    method:"post",
    body: JSON.stringify({email,password}),
    headers:{"Content-type": "application/json"}
  })
  data= await data.json()
 console.log(data)

localStorage.setItem('users',JSON.stringify(data))
navigate("/profile")

    }
return (
    <div className="login">

        <h1>real login form</h1>
        <input type='text' placeholder="enter email" value={email} 
        onChange={(e)=>{setemail(e.target.value)}}/><br/>
         {error && !email && <span > please enter name</span>}<br/>
        <input type='password' placeholder="enter password" value={password}
         onChange={(e)=>{setpassword(e.target.value)}}/><br/>
          {error && !password && <span > please enter name</span>}<br/>
         <button type="button" onClick={submitform}>login</button>
    </div>
)



}
export default Login1