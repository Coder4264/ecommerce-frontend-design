import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function CheckOutSection() {
    return (
        <div className='w-full sm:w-7/12 sm:mx-auto  lg:w-3/12 rounded-sm grid gap-2 lg:gap-4'>
            <div className='hidden md:grid gap-3 border border-gray-200 bg-white p-2 lg:p-4 rounded-sm'>
                <p className='text-md text-gray-600'>Have a coupon?</p>
                <span className='flex border border-gray-200 rounded-sm'>
                    <Input type="text" className="shadow-none border-none placeholder:text-gray-400 focus-visible:ring-0" placeholder="Add coupon" />
                    <Button className="w-1/3 shadow-none bg-white text-blue-500 rounded-l-none border-l border-gray-200 hover:bg-gray-100">Apply</Button>
                </span>
            </div>
            <div className='grid border border-gray-200 bg-white p-2 lg:p-4 rounded-sm lg:shadow-md'>

                <div className="flex justify-between mb-2 text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span className='text-black font-semibold lg:font-normal lg:text-gray-600'>$1403.97</span>
                </div>
                <div className="flex justify-between mb-2 text-sm text-gray-600">
                    <span>Discount</span>
                    <span className='text-black font-semibold lg:font-normal lg:text-red-600'>- $60.00</span>
                </div>
                <div className="flex justify-between mb-4 text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className='text-black font-semibold lg:font-normal lg:text-green-500'>+ $14.00</span>
                </div>
                <Separator />

                <div className="flex justify-between my-4 font-semibold">
                    <span >Total</span>
                    <span >$1357.97</span>
                </div>
                <Button className="bg-green-500 text-white hover:bg-green-600 shadow-none rounded-sm">Checkout</Button>
                <div className='flex items-center justify-center gap-2 md:gap-0 lg:gap-2 mt-4'>
                    <img src="/american-express.png" className='w-8 h-5 border border-gray-200 p-[3px] rounded-sm' alt="" />
                    <img src="/master.png" className='w-8 h-5 border border-gray-200 p-[3px] rounded-sm' alt="" />
                    <img src="/paypal.png" className='w-8 h-5 border border-gray-200 p-[3px] rounded-sm' alt="" />
                    <img src="/visa.png" className='w-8 h-5 border border-gray-200 p-[3px] rounded-sm' alt="" />
                    <img src="/apple-pay.png" className='w-8 h-5 border border-gray-200 p-[3px] rounded-sm' alt="" />
                </div>

            </div>
        </div>
    )
}
