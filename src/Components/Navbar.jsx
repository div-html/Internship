import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='banner bg-[#0077ed] h-7 w-full flex items-center justify-center'>
        <p className='font-light text-white text-sm'>Contact: +91 78094 89043</p>
      </div>
      <div className="navbar flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="left flex items-center">
          <img className='w-12 h-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/TESA-Logo.svg/3840px-TESA-Logo.svg.png" alt="Logo" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 w-64">
          <input type="text" placeholder="Search..." className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>

        <div className="right flex items-center space-x-6">
          <Link to='/' className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
          <Link to='/products' className="text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
          <Link to='/applications' className="text-gray-700 hover:text-blue-600 transition-colors">Applications</Link>
          <Link to='/about' className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
          <Link to='/contact' className="text-gray-700 hover:text-blue-600 transition-colors">Contact Us</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar