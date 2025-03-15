import React, { useState } from 'react'
import { Heart } from "lucide-react"
import { AiFillStar } from "react-icons/ai";

export default function ListView({ viewType }) {
    
    const data = [
        {
            id: "1",
            title: "Canon Cmera EOS 2000, Black 10x zoom",
            img: "/mobile.png",
            newPrice: "998",
            oldPrice: "1128",
            rating: "7.5",
            ordered: "154",
            shipping: "Free",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
            id: "2",
            title: "GoPro HERO6 4K Action Camera - Black",
            img: "/mobile2.png",
            newPrice: "998",
            oldPrice: "1128",
            rating: "7.5",
            ordered: "154",
            shipping: "Free",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
        },
        {
            id: "3",
            title: "GoPro HERO6 4K Action Camera - Black",
            img: "/tablet.png",
            newPrice: "998",
            oldPrice: "1128",
            rating: "7.5",
            ordered: "154",
            shipping: "Free",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
        },
        {
            id: "4",
            title: "GoPro HERO6 4K Action Camera - Black",
            img: "/laptop.png",
            newPrice: "998",
            oldPrice: "1128",
            rating: "7.5",
            ordered: "154",
            shipping: "Free",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
        },
        {
            id: "5",
            title: "GoPro HERO6 4K Action Camera - Black",
            img: "/watch.png",
            newPrice: "998",
            oldPrice: "1128",
            rating: "7.5",
            ordered: "154",
            shipping: "Free",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
        },
        {
            id: "6",
            title: "GoPro HERO6 4K Action Camera - Black",
            img: "/headphone.png",
            newPrice: "998",
            oldPrice: "1128",
            rating: "7.5",
            ordered: "154",
            shipping: "Free",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
        },
    ];
  return (
    <div className={`${viewType === "list" ? "grid gap-4" : "hidden"}`}>
                        {data.map((item, index) => (
                            <div
                                className="flex flex-row items-start bg-white rounded-sm overflow-hidden p-2 sm:p-4 gap-3 sm:gap-4 w-full border border-gray-200"
                                key={index}
                            >
                                <img
                                    className="w-20 sm:w-56 h-full object-cover rounded-md"
                                    src={item.img}
                                    alt={item.title}
                                />
                                <div className="flex flex-col w-full">
                                    <div className="flex justify-between items-start">
                                        <h2 className="text-sm md:text-md sm:font-semibold text-gray-800">{item.title}</h2>
                                        <Heart className="hidden md:block w-6 h-6 text-blue-500  transition duration-300 cursor-pointer" />
                                    </div>
                                    <span className="flex items-center gap-2 text-gray-600 mt-2">
                                        <p className="text-sm sm:text-lg md:text-xl font-bold text-black sm:text-blue-500 leading-tight">${item.newPrice}.00</p>
                                        <p className="hidden sm:block line-through text-sm font-semibold text-gray-400">${item.oldPrice}.00</p>
                                    </span>
                                    <div className="flex items-center flex-wrap gap-1 sm:gap-2">
                                        <div className="flex text-sm">
                                            <AiFillStar className="w-4 h-4 fill-amber-500" />
                                            <AiFillStar className="w-4 h-4 fill-amber-500" />
                                            <AiFillStar className="w-4 h-4 fill-amber-500" />
                                            <AiFillStar className="w-4 h-4 fill-amber-500" />
                                            <AiFillStar className="w-4 h-4 fill-gray-300" />
                                        </div>
                                        <p className="text-sm text-gray-500">({item.rating})</p>
                                        <div className='size-2 bg-gray-300 rounded-full'></div>
                                        <p className="flex items-center gap-1 text-sm text-gray-400 leading-tight">
                                            <span className="text-sm text-gray-400 leading-tight">{item.ordered}</span> Orders
                                        </p>
                                        <div className='size-2 bg-gray-300 rounded-full'></div>
                                        <p className="flex items-center gap-1 text-sm text-green-500 leading-tight">
                                            <p className="leading-tight">{item.shipping}</p> Shipping
                                        </p>
                                    </div>


                                    <p className="hidden md:block w-10/12 text-sm text-gray-600 mt-2">{item.description}</p>
                                    <p className="hidden md:block mt-2 text-blue-500 text-sm font-semibold">
                                        View Details
                                    </p>
                                </div>
                            </div>

                        ))}
                    </div>
  )
}
