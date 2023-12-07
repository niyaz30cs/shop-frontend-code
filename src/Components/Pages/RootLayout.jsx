import React from 'react'
import { Provider } from 'react-redux'
import Store from '../Redux/Store'
// import 'react-toastify/dist/React-toastify.css'
import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom'
import Navbar from '../Nav/Navbar'

const RootLayout = () => {
  return (
    <>
     <Provider store={Store}>
        <main>
            <ToastContainer />
            <div className='navbar-main'>
              <Navbar />
            </div>
            <Outlet />
        </main>
    </Provider> 
    </>
  )
}

export default RootLayout
