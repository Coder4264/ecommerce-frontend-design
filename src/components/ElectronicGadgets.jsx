import React from 'react'
import { Button } from "@/components/ui/button"
import {ArrowRight} from "lucide-react"

export default function ElectronicGadgets() {

    const data = [
        {
            id: 1,
            img: "/watch.png",
            title: "Smart waches",
            price: 19,
        },
        {
            id: 2,
            img: "/camera.png",
            title: "Cameras",
            price: 89,
        },
        {
            id: 3,
            img: "/headphone2.png",
            title: "Headphones",
            price: 10,
        },
        {
            id: 4,
            img: "/cattle.png",
            title: "Smart watches",
            price: 90,
        },
        {
            id: 5,
            img: "/headphone.png",
            title: "Gaming set",
            price: 35,
        },
        {
            id: 6,
            img: "/laptop.png",
            title: "Laptops & PC",
            price: 340,
        },
        {
            id: 7,
            img: "/tablet.png",
            title: "Smartphones",
            price: 19,
        },
        
        {
            id: 8,
            img: "/mobile2.png",
            title: "Electric Kattle",
            price: 240,
        },

    ]

    return (
        <div className=' bg-white border-b border-gray-200 rounded-sm flex flex-col lg:flex-row md:justify-between  my-4 p-2 md:p-0'>
            <div className="w-full h-56 bg-[url('/bg2.png')] bg-cover md:w-110 hidden lg:flex flex-row justify-between lg:justify-start lg:flex-col items-start gap-4 p-2 md:p-6">
                <div>
                    <p className='text-lg md:text-xl font-semibold'>Consumer <br /> electronics and <br /> gadgets</p>
                </div>
                <Button className="bg-white text-black hover:text-white">Source now</Button>
            </div>

            <div className='block lg:hidden '>
            <p className='text-lg md:text-xl font-semibold'>Consumer electronics</p>
            </div>
            <div className="w-full h-56 flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-visible whitespace-nowrap scrollbar-hide">
                {data.map(({ id, title, img, price }) => (
                    <div className="flex items-center justify-center w-full " key={id}>
                        <div className="relative w-38 h-44 lg:h-28 md:w-full flex flex-col lg:flex-row items-center gap-2 p-4 border border-gray-200">
                            {/* Image placed in the bottom-right corner */}
                            <div className="lg:absolute bottom-0 right-2">
                                <img className="w-24 h-full object-contain md:w-18" src={img} alt={title} />
                            </div>
                            {/* Text placed in the top-left corner */}
                            <div className="lg:absolute top-2 left-2">
                                <p className="text-sm md:text-md font-medium text-center text-gray-700">{title}</p>
                                <span className='flex items-center justify-center lg:justify-start lg:grid'>
                                    <p className="text-gray-400 text-sm">
                                        from</p>
                                    <p className="text-gray-400 text-sm">
                                        USD {price}
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='block lg:hidden pb-4 px-2'>
            <p className='text-md sm:text-lg md:text-xl font-semibold text-blue-500 flex items-center gap-1'>Source now <ArrowRight className='size-5' /></p>
            </div>
        </div>
    )
}
