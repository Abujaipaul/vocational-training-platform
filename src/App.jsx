import { useState } from 'react'
import './App.css'
import NavBar from './navbar'
import Hero from './hero'
import CourseCatalog from './coursecatalog'
import Footer from './footer'



function App() {
 

  return (
    <>
      <div>
        <NavBar />
        <Hero />
        <CourseCatalog />
        <Footer />
      </div>
    </>
  )
}

export default App
