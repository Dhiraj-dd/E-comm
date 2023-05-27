// this file is basicall to hide the log in page after user login 
// and after the login page show the user to logout page
// we can also save the user login detail in the local storage of the console 
// this page is basically if we does not logged in the other pages / router will not 
// show us after the login the page will shows us
// name of the page is basically is private component page
// to put the data in local storage type
// localStorage.setItem("keyname",JSON.stringfy(result))
import React from "react";
import {Navigate,Outlet} from 'react-router-dom'
 let Hide =()=>{
    let author = localStorage.getItem('user')

return author? <Outlet/>: <Navigate to='/login' />


 }
 export default Hide