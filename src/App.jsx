import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import WriteArticle from './pages/WriteArticle';
import BlogTitles from './pages/BlogTitles';
import GenerateImage from './pages/GenerateImage';
import Removebackground from './pages/Removebackground';
import RemoveObject from './pages/RemoveObject';
import ReviewResume from './pages/ReviewResume';
import Community from './pages/Community';
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import {Toaster} from "react-hot-toast";

const App = () => {
  const {getToken}=useAuth()
  useEffect(()=>{
    getToken().then((token)=>console.log(token));
  },[]) 
  
  return (
  
    <div>
      <Toaster/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route>
    <Route path='/ai'  element={<Layout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path='WriteArticle' element={<WriteArticle/>}/>
        <Route path='BlogTitles' element={<BlogTitles/>}/>
    
    <Route path='GenerateImage' element={<GenerateImage/>}/>
    <Route path='Removebackground' element={<Removebackground/>}/>
    <Route path='RemoveObject' element={<RemoveObject/>}/>
    <Route path='ReviewResume' element={<ReviewResume/>}/>
        <Route path='Community' element={<Community/>}/>
   
    </Route>
  </Route>
</Routes>
 </div>
   
  )
}

export default App