import React from 'react'
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <div className='hidden sm:block'>
    <div className='relative'>
        <img src="/cta-banner.png" className='w-full max-h-28 bg-contain rounded-sm' alt="" />
        <div className='w-full px-4 md:px-12 absolute top-0 left-0 h-full flex items-center justify-between'>
            <div>
                <p className='text-lg md:text-xl lg:text-2xl font-semibold text-white'>Super discount on more than 100 USD</p>
                <p className='text-xs md:text-sm text-gray-200'>Have you ever finally just write dummy info</p>
            </div>
            <Button className="bg-amber-500 text-white rounded-sm shadow-none">Shop now</Button>
        </div>
    </div>
    </div>
  )
}
