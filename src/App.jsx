import { useState } from 'react'
import './App.css'
import NavBar from './navbar'
import Hero from './hero'
import CourseCatalog from './coursecatalog'
import Footer from './footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CheckOut from './checkout'



function App() {
 

  return (
    <>
     <BrowserRouter>
        <NavBar />
         <Routes>
            <Route path='/' element={<><Hero /> <CourseCatalog />  </>}/>
            <Route path="/checkout" element={<CheckOut />} />
         </Routes>
         <Footer />
         
    
     </BrowserRouter>
      
    </>
  )
}

export default App
