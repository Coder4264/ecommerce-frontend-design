import React from 'react'
import { User } from 'lucide-react';
import { IoMdCart } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { House, Logs, Heart, ReceiptText, Globe, Headset, BookOpen    } from 'lucide-react';

import Menu from './Menu';
import { Separator } from "@/components/ui/separator"



export default function Navbar() {
    return (
        <nav className='bg-white'>
            <main className='w-full lg:w-[85vw] m-auto flex items-center justify-between gap-12 px-4 sm:px-0 py-4'>

                <section className='flex items-center gap-4'>
                    
                        <Sheet >
                            <SheetTrigger><IoMdMenu className='size-7 text-gray-800 block lg:hidden' /></SheetTrigger>
                            <SheetContent side="left" className="p-0 bg-white block lg:hidden">
                                
                                     <div className='grid gap-1 bg-gray-100 px-5 py-4'>
                                        <img src="/avatar.png" alt="" />
                                        <div className='flex items-center gap-1 text-gray-800'>
                                            <p>Sign in</p>
                                            |
                                            <p>Register</p>
                                        </div>
                                     </div>
                                     <div className='grid gap-2 p-2 text-sm'>
                                        <span className='flex items-center gap-4 hover:bg-light p-2'><House className='size-5 text-gray-400'/> Home</span>
                                        <span className='flex items-center gap-4 hover:bg-light p-2'><Logs className='size-5 text-gray-400'/> Categories</span>
                                        <span className='flex items-center gap-4 hover:bg-light p-2'><Heart className='size-5 text-gray-400'/> Favorities</span>
                                        <span className='flex items-center gap-4 hover:bg-light p-2'><ReceiptText  className='size-5 text-gray-400'/> My orders</span>
                                        <Separator/>
                                        <span className='flex items-center gap-4 hover:bg-light p-2'><Globe  className='size-5 text-gray-400'/> English | USD</span>
                                        <span className='flex items-center gap-4 hover:bg-light p-2'><Headset className='size-5 text-gray-400'/> Contact us</span>
                                        <span className='flex items-center gap-4 hover:bg-light p-2'><BookOpen className='size-5 text-gray-400'/> About</span>
                                        <Separator/>
                                        <div className='w-full grid gap-2 pl-9'>
                                        <span className='hover:bg-light p-2'>User aggrement</span>
                                        <span className='hover:bg-light p-2'>Partnership</span>
                                        <span className='hover:bg-light p-2'>Privacy policy</span>
                                        </div>
                                        
                                     </div>
                            </SheetContent>
                        </Sheet>


                    <img src="/logo.png" className='w-36' alt="Logo" />
                </section>
                <section className='w-2/3 hidden md:flex border-2 border-blue-500 rounded-lg'>
                    <Input className="border-none focus-visible:ring-0" type="search" placeholder="Search" />
                    <Select >
                        <SelectTrigger className="w-[130px] rounded-none border-0 border-l-2 border-blue-500 focus:ring-0">
                            <SelectValue placeholder="All Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light" className="hover:bg-">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                    <Link to="filter-page">
                    <Button className="w-24 rounded-l-none border-none bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-0">Search </Button>
                    </Link>
                </section>
                <section className='hidden lg:flex  gap-4'>
                    <div className='flex flex-col items-center'>
                        <User className='size-6 fill-[#8B96A5] text-[#8B96A5]' />
                        <p className='text-xs text-gray-400'>Profile</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <MdMessage className='size-6 fill-[#8B96A5] ' />
                        <p className='text-xs text-gray-400'>Message</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <IoIosHeart className='size-6 fill-[#8B96A5] ' />
                        <p className='text-xs text-gray-400'>Order</p>
                    </div>
                    <Link to="/cart-page" className='flex flex-col items-center'>
                        <IoMdCart className='size-6 fill-[#8B96A5] ' />
                        <p className='text-xs text-gray-400'>Cart</p>
                    </Link>
                </section>
                <section className='flex lg:hidden gap-4'>
                    <Link to="/cart-page">
                    <IoMdCart className='size-6  text-black' />
                    </Link>
                    <User className='size-6  text-black' />
                </section>
            </main>
            <Menu />
        </nav>
    )
}
