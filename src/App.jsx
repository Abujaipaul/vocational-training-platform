import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './errorfallback'
import './App.css'
import NavBar from './navbar'
import Hero from './hero'
import CourseCatalog from './coursecatalog'
import Footer from './footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CheckOut from './checkout'
import Login from './login'
import Signup from './signup'



function App() {
 

  return (
    <>
     <ErrorBoundary FallbackComponent={ErrorFallback}>
  <BrowserRouter>
     <NavBar /> 
     
     <Routes>
        <Route path='/' element={<><Hero /> <CourseCatalog /></>}/>
        <Route path="/checkout" element={<CheckOut />} />
        
        {/* dedicated Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="*" element={<div className='flex items-center justify-center text-3xl font-bold my-38'>404 - Page Not Found</div>} />
     </Routes>
     
     <Footer /> 
  </BrowserRouter>
</ErrorBoundary>
    </>
  )
}

export default App
