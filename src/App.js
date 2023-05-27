import './App.css';
import Header from './component/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './routerdata/Product';
import Profile from './routerdata/Profile';
import Logout from './routerdata/Logout';
import Login from './routerdata/Login';
import Footer from './component/Footer';
import Hide from './routerdata/Hide';
import Hide2 from './routerdata/Hide2';
import Login1 from './routerdata/Login1'
import Productlist from './routerdata/Productlist';
import Delete from './routerdata/Delete';
import Iphone from './Profiledetail/Iphone';
import Iris from './Profiledetail/Iris';
import Samsung from './Profiledetail/Samsung';
import Smartphone from './Products/Smartphone';
import Footware from './Products/Footware';
import Fila from './Profiledetail/Fila';
import Reebok from './Profiledetail/Reebok';
import Puma from './Profiledetail/Puma';
import Adidas from './Profiledetail/Adidas';
import Clothing from './Products/Clothing';
import Formal from './Profiledetail/Formal';
import Casual from './Profiledetail/Casual'
function App() {

  return (
    <div className="App">
    <BrowserRouter basename='MY-PROJECT'>
    <Header/>
<Routes>
<Route element={<Hide/>} >
<Route path='login1' element={<Login1/>}/>
</Route>
<Route element={<Hide2/>}>
<Route path='/Products/Smartphone' element={<Smartphone/>}/>
<Route path='/Profiledetail/Iphone' element={<Iphone/>} />
<Route path='/Profiledetail/Iris' element={<Iris/>}/>
<Route path='/Profiledetail/Samsung' element={<Samsung/>}/>
<Route path='/Products/Footware' element={<Footware/>}/>
<Route path='/Profiledetail/Puma' element={<Puma/>} />
<Route path='/Profiledetail/Reebok' element={<Reebok/>} />
<Route path='/Profiledetail/Fila' element={<Fila/>} />
<Route path='/Profiledetail/Adidas' element={<Adidas/>} />
<Route path='/Products/Clothing' element={<Clothing/>}/>
<Route path ='/profiledetail/Formal' element={<Formal/>}/>
<Route path ='/profiledetail/Casual' element={<Casual/>}/>
<Route path='/list' element={<Productlist/>} />
<Route path='/profile' element={<Profile/>} />
<Route path='product' element={<Product/>}/>
<Route path='/delete' element={<Delete/>}/>
<Route path='logout' element={<Logout/>}/>
<Route path='signout' element={<Logout/>}/>
</Route>
<Route path='login' element={<Login/>}/>


</Routes>
    </BrowserRouter>
    
    <Footer/>
    </div>
  );
}

export default App;
