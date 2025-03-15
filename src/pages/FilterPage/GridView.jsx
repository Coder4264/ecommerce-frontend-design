import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai";
import { Heart, X } from "lucide-react"
import { Link } from 'react-router-dom';

export default function GridView({ viewType }) {
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
        <div className='grid gap-3'>
            <div className={`${viewType === "grid" ? "hidden md:flex items-center gap-3 w-full overflow-x-auto whitespace-nowrap px-3 scrollbar-hide" : "hidden"}`}>
                {[
                    "Samsung",
                    "Apple",
                    "Pocco",
                    "Metallic",
                    "4 Start",
                    "3 Start",
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 border border-blue-500 text-sm text-blue-500  hover:bg-gray-100  cursor-pointer p-1 rounded-sm"
                    >
                        <p className='text-gray-600 text-sm md:text-normal'>
                            {item}
                        </p>
                        <X className="size-4 text-gray-500" />
                    </div>
                ))}
            </div>

            <div className={`${viewType === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "hidden"}`}>
                {data.map((item, index) => (
                    <div
                        className="flex flex-col items-start bg-white rounded-sm overflow-hidden p-4 gap-4 w-full border border-gray-200"
                        key={index}
                    >
                        <img
                            className="w-full sm:w-56 mx-auto object-cover rounded-md"
                            src={item.img}
                            alt={item.title}
                        />
                        <div className="flex items-start justify-between w-full">
                            <div className='w-full grid gap-2'>
                                <div className='flex items-end justify-between'>
                                    <div className="flex items-center gap-2 text-gray-600 mt-2">
                                        <p className="text-lg font-bold leading-tight">${item.newPrice}.00</p>
                                        <p className="line-through text-sm font-semibold text-gray-400">${item.oldPrice}.00</p>
                                    </div>
                                    <Heart className='text-blue-500 size-6' />
                                </div>
                                <div className="flex items-center gap-2 mt- ">
                                    <div className="flex text-sm">
                                        <AiFillStar className="w-4 h-4 fill-amber-500" />
                                        <AiFillStar className="w-4 h-4 fill-amber-500" />
                                        <AiFillStar className="w-4 h-4 fill-amber-500" />
                                        <AiFillStar className="w-4 h-4 fill-amber-500" />
                                        <AiFillStar className="w-4 h-4 fill-gray-300" />
                                    </div>
                                    <p className="text-sm text-amber-500">{item.rating}</p>
                                </div>
                                <h2 className="w-8/12 text-sm text-gray-500">{item.title}</h2>
                            </div>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
