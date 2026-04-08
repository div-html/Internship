import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <div className=''>
         <BrowserRouter>
         <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
