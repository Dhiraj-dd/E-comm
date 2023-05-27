import React from 'react'
import { useState,useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

function Product() {
  let [name,setname]= useState("")
  let [brand,setbrand]= useState("")
  let [price,setprice]= useState("")
  let [category,setcategory]= useState("")
  let [error,seterror] = useState(false)
  let navigate = useNavigate()
  useEffect(()=>{
   
   localStorage.getItem('product')
 
  
  })
 let submitproduct= async()=>{
  if(!name || !brand || !price || !category){
    seterror(true)
     return false
     
    }

 let data = await fetch('http://localhost:4400/addproduct',{
  method :"post",
  body: JSON.stringify({name,brand,price,category}),
  headers:{"Content-type":"application/json"}
 })
let result = await data.json()
localStorage.setItem('product',JSON.stringify(result))
navigate('/list')
  console.log(result)
  }
  return (
    <div className='addproduct'>
      <h1>add product</h1><br/>
 <input type='text' placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}}
 /> <br/>{error && !name && <span className='login'>enter valid name</span>}<br/>
<input type='text' placeholder='brand' value={brand} onChange={(e)=>{setbrand(e.target.value)}}
 /><br/>{error && !brand && <span className='login'>enter valid brand</span>}<br/>
<input type='text' placeholder='price' value={price} onChange={(e)=>{setprice(e.target.value)}}
 /><br/>{error && !price && <span className='login'>enter valid price</span>}<br/>
<input type='text' placeholder='category' value={category} onChange={(e)=>{setcategory(e.target.value)}}
 /><br/>{error && !category && <span className='login'>enter valid category</span>}<br/>
<button onClick={submitproduct}>add product</button>

    </div>
  )
}

export default Product
