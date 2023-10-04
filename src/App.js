import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Component/Forms/Signup'
import Login from './Component/Forms/Login'
import { Header } from './Component/Header/Header'
import Home from './Component/Header/Home'
import Dashboard from './Dashboard'
import {setaxiostoken} from './Redux/setaxiostoken'
import ChangePassword from './Component/Forms/ChangePassowrd'
import { useDispatch } from 'react-redux'
import { loaduser } from './Redux/Action/authAction'
import AddCategory from './Component/Forms/AddCategory'
import Profile from './Component/Forms/Profile'
import GetallCategory from './Component/Forms/GetallCategory'
import AddProduct from './Component/Forms/addProduct'
import { getallcategory } from './Redux/Action/categoryAction'
import UpdateCategory from './Component/Forms/UpdateCategory'
import AddShop from './Component/Forms/AddShop'
import { getusershop } from './Redux/Action/shopAction'
import GetallShops from './Component/Forms/GetallShops'
import UpdateShop from './Component/Forms/UpdateShop'

export default function App() {
  setaxiostoken(localStorage.token)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loaduser())
    dispatch(getallcategory())
    dispatch(getusershop())
  },[dispatch])
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
    
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/addcategory' element={<AddCategory />} />
          <Route path='/getallcategory' element={<GetallCategory />} />
          <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update-category-page' element={<UpdateCategory />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addshop' element={<AddShop />} />
          <Route path='/allshops' element={<GetallShops />} />
          <Route path='/updateshop' element={<UpdateShop />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
