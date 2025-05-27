
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
import Layout from './components/UI/Layout';
import { Provider } from 'react-redux';
import store from './Store';

function App() {

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient} >
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/layout" element={<Layout />}>
              <Route path="" element={<Index />} />
              <Route path="menu" element={<Menu />} />
              <Route path='order' element={<OrderInfo />} />
              <Route path='cart' element={<Cart />} />
              <Route path='singleorder' element={<SingleOrdedr />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App
