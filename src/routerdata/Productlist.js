import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Productlist() {
let [product,setproduct] = useState([])
let route = []
    useEffect(()=>{
   getproduct()
    },[])
    let getproduct =async ()=>{
        let data = await fetch("http://localhost:4400/get")
       let result =await data.json()
        setproduct(result)   
    }
    return(
    <div className='list'>
     <h1>this is product list </h1> 
     <ul>
        <li> id:</li>
        <li>name:</li>
        <li>brand:</li>
        <li>price:</li>
        <li>category:</li>
     </ul>
     {
        product.map((item,index,)=>
    <ul key={index}>   
    <li>{index+1}</li>   
    <li>{item.name}</li>
    <li>{item.brand}</li>
    <li>{item.price}</li>
    <li>{item.category}</li>
     </ul>
        )
        
     }
    
    </div>
    ) 
}

export default Productlist
