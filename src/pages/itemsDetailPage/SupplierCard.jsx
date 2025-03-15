import React from 'react'
import { Button } from "@/components/ui/button"
import { ShieldCheck, Globe, Heart, ChevronRight } from "lucide-react"

export default function SupplierCard() {
    return (
        <div className='w-full lg:w-3/12'>
            <div className='border borrder-gray-200 p-3 rounded-sm flex flex-col gap-4'>
                <div className='flex gap-2 items-center justify-between md:justify-start'>
                    <img src="/trader-logo.jpg" className='hidden md:block size-12' alt="trader-logo" />
                    <div className='flex items-center gap-2'>
                        <img src="/trader-logo.jpg" className='block md:hidden size-12' alt="trader-logo" />
                        <div className='block md:hidden'>
                            <p className='text-md'>Supplier</p>
                            <p className='text-md'>Guanjoi Trading LLC</p>
                        </div>
                        <div className='hidden md:inline text-md'>
                        <p className=''>Supplier</p>
                        <p className=''>Guanjoi Trading LLC</p>
                        </div>
                    </div>
                    <ChevronRight className='md:hidden block text-gray-400'/>
                </div>
                <div className="w-full h-[2px] bg-gray-100 "></div>
                <div className='flex flex-row md:flex-col justify-between sm:justify-evenly md:gap-3'>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <img src="https://www.worldometers.info/img/flags/small/tn_gm-flag.gif" className='w-5 h-4' alt="flag" />
                        <p className='hidden md:inline text-sm text-gray-400'>Germany, Berlin</p>
                        <p className='md:hidden inline text-sm text-gray-600'>Germany</p>
                    </div>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <ShieldCheck className="size-5 text-gray-400" />
                        <p className='hidden md:inline text-sm text-gray-400'>Verified Seller</p>
                        <p className='md:hidden inline text-sm text-gray-600'>Verified Seller</p>
                    </div>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <Globe className="size-5 text-gray-400" />
                        <p className='hidden md:inline text-sm text-gray-400'>Worldwide Shippping</p>
                        <p className='md:hidden inline text-sm text-gray-600'>Worldwide</p>
                    </div>
                </div>
                <div className='hidden md:grid gap-2 mt-4'>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-sm">Send inquiry</Button>
                    <Button className="w-full bg-transparent shadow-none border border-gray-200  hover:bg-blue-500 text-blue-500 hover:text-white rounded-sm">Seller's profile</Button>
                </div>
            </div>
            <div className='hidden md:flex items-center gap-2 justify-center py-6'>
                <Heart className='size-5 text-blue-500' />
                <p className='text-md text-blue-500 font-md'>Save for later</p>
            </div>
        </div>
    )
}
