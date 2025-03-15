import React from 'react'
import Hero from '../components/Hero'
import Deals from '../components/Deals'
import HomeProducts from '../components/HomeProducts'
import ElectronicGadgets from '../components/ElectronicGadgets'
import Cta from '../components/Cta'
import RecomendedItems from '../components/RecomendedItems'
import ExtraServices from '../components/ExtraServices'
import SupplierCountry from '../components/SupplierCountry'


export default function HomePage() {
  return (
    <div className='bg-[#F7FAFC] w-full md:w-[85vw] m-auto '>
      <Hero />
      <Deals />
      <HomeProducts />
      <ElectronicGadgets />
      <Cta />
      <RecomendedItems />
      <ExtraServices />
      <SupplierCountry />
    </div>
  )
}
