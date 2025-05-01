
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Pages/Index';

import "./index.css";
import Menu from './components/Pages/Menu';
import OrderInfo from './components/featurs/Order/OrderInfo';
import Cart from './components/Pages/Cart';

function App() {


  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/auth' element={<OrderInfo />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>






    </>
  )
}

export default App
