import React, { useState } from 'react'
import { MdMessage } from "react-icons/md";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { Check, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ItemDetails() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };

    return (
        <div className='w-full lg:w-6/12 flex flex-col gap-3 p-4 sm:p-0'>
            <span className='hidden md:flex items-center gap-1'>
                <Check className="size-5 text-green-500" />
                <p className='text-md text-green-500'>In stock</p>
            </span>
            <div className='flex flex-col gap-2'>
                <p className='hidden md:inline w-10/12 text-xl font-semibold leading-tight'>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</p>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <span className='flex items-center'>
                            <AiFillStar className='text-amber-500' />
                            <AiFillStar className='text-amber-500' />
                            <AiFillStar className='text-amber-500' />
                            <AiFillStar className='text-amber-500' />
                            <AiFillStar className='text-gray-300' />
                        </span>
                        <p className='text-sm text-amber-500'>9.3</p>
                    </div>
                    <div className='w-1 h-1 bg-gray-300 rounded-full'></div>
                    <div className='flex items-center gap-2'>
                        <span className='flex items-center gap-1'>
                            <MdMessage className='size-4 text-gray-400' />
                            <p className='text-sm text-gray-400'>32 reviews</p>
                        </span>
                        <div className='w-1 h-1 bg-gray-300 rounded-full'></div>
                        <span className='flex items-center gap-1'>
                            <MdOutlineShoppingBasket className='size-4 text-gray-400' />
                            <p className='text-sm text-gray-400'>154 sold</p>
                        </span>
                    </div>
                </div>
                <p className='md:hidden inline w-10/12 text-lg font-semibold leading-tight'>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</p>
                <span className='md:hidden flex items-center gap-1'>
                    <p className="text-lg text-red-500 font-semibold leading-tight">$98.00</p>
                    <p className="text-sm text-gray-500 leading-tight">(50-100 pcs)</p>
                </span>
                <div className='md:hidden flex items-center gap-1'>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-sm">Send inquiry</Button>
                    <div className='p-2 border border-gray-200 rounded-sm'>
                        <Heart className='size-5 text-blue-500' />
                    </div>
                </div>
            </div>

            {/* products quantity section */}
            <div className="bg-orange-100 h-auto md:h-16 hidden md:flex items-center p-2 md:p-4 gap-10 sm:gap-16 md:gap-20 lg:gap-24">
                {/* First Price Range */}
                <span>
                    <p className="text-lg text-red-500 font-semibold leading-tight">$98.00</p>
                    <p className="text-xs text-gray-500 leading-tight">50-100 pcs</p>
                </span>

                {/* Divider and Second Price Range */}
                <div className="h-full flex items-center gap-3">
                    <div className="w-[0.5px] h-full md:h-8 bg-gray-400"></div>
                    <div>
                        <p className="text-lg  font-semibold leading-tight">$90.00</p>
                        <p className="text-xs text-gray-500 leading-tight">100-700 pcs</p>
                    </div>
                </div>
                {/* Divider and Third Price Range */}
                <div className="h-full flex items-center gap-3">
                    <div className="w-[0.5px] h-full md:h-8 bg-gray-400"></div>
                    <div>
                        <p className="text-lg font-semibold leading-tight">$78.00</p>
                        <p className="text-xs text-gray-500 leading-tight">700+ pcs</p>
                    </div>
                </div>
            </div>

            {/* Product descriptions */}
            <div className="bg-white w-full max-w-3xl mx-auto flex flex-col gap-3">
                <div className="flex items-center">
                    <p className="w-4/12 text-sm text-gray-400">Price:</p>
                    <p className="w-5/12 text-sm text-gray-700">Negoiatable</p>
                </div>
                <div className="w-full h-px bg-gray-100"></div>
                <div className="flex flex-col gap-3">
                    <div className='flex items-center'>
                        <p className="w-4/12 text-sm text-gray-400">Type:</p>
                        <p className="w-5/12 text-sm text-gray-700">Classic shoes</p>
                    </div>
                    <div className='flex items-center'>
                        <p className="w-4/12 text-sm text-gray-400">Material:</p>
                        <p className="w-5/12 text-sm text-gray-700">Plastic material</p>
                    </div>
                    <div className='flex items-center'>
                        <p className="w-4/12 text-sm text-gray-400">Design:</p>
                        <p className="w-5/12 text-sm text-gray-700">Modern Design</p>
                    </div>
                </div>
                <div className="w-full h-[2px] bg-gray-100"></div>
                <div className="flex flex-col gap-3">
                    <div className='flex items-start'>
                        <p className="w-4/12 text-sm text-gray-400">Customization:</p>
                        <p className="w-5/12 text-sm text-gray-700">Customized logo and design custom packages</p>
                    </div>
                    <div className='flex items-start'>
                        <p className=" w-4/12 text-sm text-gray-400">Protection:</p>
                        <p className="w-5/12 text-sm text-gray-700">Refund policy</p>
                    </div>
                    <div className='flex items-start'>
                        <p className="w-4/12 text-sm text-gray-400">Warranty:</p>
                        <p className="w-5/12 text-sm text-gray-700">2 years full warranty</p>
                    </div>
                </div>
                <div className="w-full h-[2px] bg-gray-100 "></div>
                <div>
                    <p className="text-sm md:text-md text-gray-600">
                        {isExpanded ? (
                            <>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </>
                        ) : (
                            <>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                            </>
                        )}
                    </p>
                    <button
                        onClick={handleToggle}
                        className="text-blue-500 text-sm underline mt-2"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>
    )
}
