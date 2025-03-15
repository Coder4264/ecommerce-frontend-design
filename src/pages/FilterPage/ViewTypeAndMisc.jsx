import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LayoutGrid, Menu, Filter } from "lucide-react"
import { BiMenuAltLeft } from "react-icons/bi";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function ViewTypeAndMisc({ viewType, setViewType }) {
  return (
    <div className='bg-white w-full h-14 flex items-center justify-between border border-gray-200 px-2 sm:px-4 rounded-sm'>
                        <div className='hidden md:flex gap-1 items-center'>
                            <p className='text-sm lg:text-md'>12,911 items in</p>
                            <p className='text-sm lg:text-md font-semibold'>Mobile accessory</p>
                        </div>
                        <div className='w-full md:w-auto flex items-center sm:gap-4'>
                            <span className='hidden lg:flex items-center gap-1'>
                                <Input type="checkbox" className="w-4 h-4 accent-blue-500" />
                                <p className='text-sm'>Verified only</p>
                            </span>
                            <Select className="">
                                <SelectTrigger className="hidden sm:flex w-full md:w-[130px] rounded-sm border border-gray-200 focus:ring-0 shadow-none">
                                    <SelectValue placeholder="Featured" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="features" >Featured</SelectItem>
                                    <SelectItem value="recomended">Recomended</SelectItem>
                                    <SelectItem value="most popular">Most Popular</SelectItem>
                                    <SelectItem value="best value">Best value</SelectItem>
                                </SelectContent>
                            </Select>
                            {/* Filter dropdown for small screen */}
                            <Button className="w-full text-xs md:text-md md:hidden flex text-gray-700 text-center bg-transparent hover:bg-transparent shadow-none rounded-sm border border-gray-200">
                                Sort:Newest
                                <BiMenuAltLeft className='text-gray-500'/>
                            </Button>
                            <Button className="w-full text-xs md:text-md md:hidden flex text-gray-700 text-center bg-transparent hover:bg-transparent shadow-none rounded-sm border border-gray-200">
                                Filter (3)
                                <Filter className='text-gray-500'/>
                            </Button>
                            


                            <div className='flex items-center justify-end'>
                                <Button onClick={() => setViewType("grid")} className={`bg-white w-fit p-3 rounded-l-sm rounded-r-none ${viewType === "grid" ? "bg-gray-200 text-black" : "bg-white text-black"}  shadow-none border border-gray-200 hover:bg-gray-100 duration-500 focus:bg-gray-200`}>
                                    <LayoutGrid className='fill-black text-black' />
                                </Button>
                                <Button onClick={() => setViewType("list")} className={`bg-white w-fit p-3 rounded-r-sm ${viewType === "list" ? "bg-gray-200 text-black" : "bg-white text-black"} rounded-l-none shadow-none border border-gray-200 hover:bg-gray-100 duration-500 focus:bg-gray-200`}>
                                    <Menu className='fill-black text-black' />
                                </Button>
                            </div>
                        </div>
                    </div>
  )
}
