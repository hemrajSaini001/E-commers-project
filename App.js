import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Navbar from './components/Navbar'



function App() {
  // Pehle router define karo
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: '/collection',
      element: (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Navbar />
          <Collection />
        </div>
      ),
    },
    {
      path: '/about',
      element: (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Navbar />
          <About />
        </div>
      ),
    },
    {
      path: '/contact',
      element: (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Navbar />
          <Contact />
        </div>
      ),
    },
    {
      path: '/product/:productId',
      element: (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Navbar />
          <Product />
        </div>
      ),
    },
    {
      path: '/cart',
      element: (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Navbar />
          <Cart />
        </div>
      ),
    },
    {
      path: '/login',
      element: (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Navbar />
          <Login />
        </div>
      ),
    },
    {
      path: '/place-order',
      element: (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Navbar />
          <PlaceOrder />
        </div>
      ),
    },
    {
      path: '/orders',
      element: (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Navbar />
          <Orders />
        </div>
      ),
    },
  ]);

  // Yahan return karo RouterProvider ko
  return <RouterProvider router={router}/>;
  
  
}

export default App;
