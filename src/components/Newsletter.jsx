import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function Newsletter() {
  return (
    <div className='bg-gray-100 mt-12'>
        <div className='flex flex-col items-center justify-center gap-6 py-8 px-2 md:px-0'>
            <div>
        <h2 className='text-lg md:text-xl font-semibold text-center'>Subscribe on our newsletter</h2>
        <p className='text-sm text-gray-500 text-center'>Get daily news on upcoming offers from many suppliers all over the world</p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-2 md:gap-1'>
            <div className='flex items-center bg-white border-2 px-2 rounded-md border-gray-100'>
                <Mail className='size-5 text-gray-400'/>
                <Input type="email" className="placeholder:text-gray-400 border-none focus-visible:ring-0 shadow-none" placeholder="Email"/>
            </div>
                <Button className="cursor-pointer bg-blue-500 text-white hover:bg-blue-600">Subscribe</Button>
        </div>
        </div>
    </div>
  )
}
