import React from 'react'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

export default function Layout({children}) {
  return (
    <div className='inter bg-[#F7FAFC]'> 
    <Navbar/>
    {children}
    <Newsletter/>
    <Footer/>
    </div>
  )
}
