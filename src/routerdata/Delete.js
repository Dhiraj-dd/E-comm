import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Delete() {
    let [name,setname]= useState("")
    let [status,setstatus]= useState("delete component")
    let navigate= useNavigate()
    let deleteproduct = async(e)=>{
 e.preventDefault()

  let data = await fetch("http://localhost:4400/delete",{
    method:"delete",
    body: JSON.stringify({name}),
  headers:{"Content-type":"application/json"}
  })
 if(data){
  return  <h3> {setstatus(`${name} is deleted successful`)}</h3>
  
 }
 else{
  return  <h3>{setstatus("please enter correct detail")}</h3>
 }
    }
  return (
    <div>
      <h1> {status}</h1>
      <input type='text' placeholder='enter the name' value={name} 
      onChange={(e)=>{setname(e.target.value)}}/><br/>
      <button onClick={deleteproduct}>submit</button>
    </div>
  )
}

export default Delete
