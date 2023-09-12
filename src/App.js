import './App.css';
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import { productsData } from './Api/Api';
import Product from './Components/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';


const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<Home />,
        loader: productsData,
      },
      {
        path:'/product/:id',
        element:<Product />
      },
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/login',
        element:<Login />
      },
    ]
  }
])

function App() {
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
