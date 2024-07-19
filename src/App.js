import React from 'react'; 
import { Popup} from './components';
import {Home,Products, ProductInfo, Cart, CheckOut} from './pages/index';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  )
}

function AppContent(){
  const location = useLocation();


  return (
    <>
      {location.pathname === '/' && <Popup/>}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/Product/:id' element={<ProductInfo/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/CheckOut' element={<CheckOut/>}/> 
          </Routes>
    </>
  );
}



export default App;
