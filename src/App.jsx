import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import { BrowserRouter,Routes,Route } from 'react-router';
import Shop from './pages/shop/Shop';
import ShopCategory from './pages/shopcategory/ShopCategory';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import LoginSignup from './pages/loginsignup/LoginSignup';
import Footer from './components/footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route path='/' element={<Shop/>} />
         <Route path='/mens' element={<ShopCategory  category="men"/>}/>
         <Route path='/product' element={<Product/>}>
             <Route  path=':productId' element={<Product/>}/>
         </Route>
         <Route path='/cart' element={<Cart/>} />
         <Route path='/login' element={<LoginSignup/>} />
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
