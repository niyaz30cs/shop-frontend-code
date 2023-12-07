import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from '../Pages/RootLayout'
import Home from '../Pages/Home'
import Register from "../Auth/Register"
import Login from "../Auth/Login"
import Cart from "../Cart/Cart"
import StoreP from './StoreP'
import All from './All'
import Private from '../Redux/Private'
import PhoneP from './PhoneP'
import LaptopP from './LaptopP'
import CategoryP from './CategoryP'
import ClickPage from './ClickPage'
import King from './King'
import Dashboard from '../Cart/Dashboard/Dashboard'
import SearchResu from '../Pages/SearchResu'

function Routing(){
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<RootLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='cart' element={<Private Components={Cart}/>} />
              <Route path='/store' element={<StoreP />} />
              <Route path='/all' element={<All />} />
              <Route path='/iphone' element={<PhoneP />} />
              <Route path='/lap' element={<LaptopP />} />
              <Route  path='/:cat' element={<CategoryP />}/>
              <Route path='/ClickPage/:id' element={<ClickPage />}/>
              <Route path='/king' element={<King />} />
              <Route path='/search' element={<SearchResu />} />
              <Route path='/dash' element={<Dashboard />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing
