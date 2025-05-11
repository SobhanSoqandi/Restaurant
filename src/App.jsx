
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Pages/Index';

import "./index.css";
import Menu from './components/Pages/Menu';
import OrderInfo from './components/featurs/Order/OrderInfo';
import Cart from './components/Pages/Cart';
import SingleOrdedr from './components/Pages/SingleOrdedr';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

function App() {

  // const BrowserRouter = createBrowserRouter([
  //   {

  //     children: [
  //       {
  //         path: "/menu",
  //         element: <Menu />
  //       } ,
  //       {
  //         path: "/",
  //         element: <Index />
  //       } ,
  //       {
  //         path: "/menu",
  //         element: <Menu />
  //       }
  //     ]
  //   }
  // ])

  const queryClient = new QueryClient();

  return (
    <>

      <QueryClientProvider client={queryClient} >
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/auth' element={<OrderInfo />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/singleorder' element={<SingleOrdedr />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>



      {/* <RouterProvider router={BrowserRouter} /> */}

    </>
  )
}

export default App
