import React from 'react'
import { MdLock, MdMessage } from "react-icons/md";
import { ImTruck } from "react-icons/im";

export default function Facilities() {
  return (
    <div className='w/10/12 lg:w-10/12 hidden md:flex items-center gap-20 lg:gap-24'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-gray-200 p-1 size-12 flex items-center justify-center rounded-full'>
                            <MdLock className='size-6 text-gray-400 ' />
                        </div>
                        <span>
                            <p className='text-sm text-700 leading-tight'>Secure payment</p>
                            <p className='text-sm text-gray-400 leading-tight'>Have you ever finally just </p>
                        </span>
                    </div>
    
                    <div className='flex items-center gap-2'>
                        <div className='bg-gray-200 p-1 size-12 flex items-center justify-center rounded-full'>
                            <MdMessage className='size-6 text-gray-400 ' />
                        </div>
                        <span>
                            <p className='text-sm text-700 leading-tight'>Customer Support</p>
                            <p className='text-sm text-gray-400 leading-tight'>Have you ever finally just </p>
                        </span>
                    </div>
    
                    <div className='flex items-center gap-2'>
                        <div className='bg-gray-200 p-1 size-12 flex items-center justify-center rounded-full'>
                            <ImTruck className='size-6 text-gray-400 ' />
                        </div>
                        <span>
                            <p className='text-sm text-700 leading-tight'>Free Delivery</p>
                            <p className='text-sm text-gray-400 leading-tight'>Have you ever finally just </p>
                        </span>
                    </div>
                </div>
  )
}
