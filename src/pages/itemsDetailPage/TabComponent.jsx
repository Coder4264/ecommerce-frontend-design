import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Check } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabComponent() {
  return (
    <div className='hidden md:block w-full lg:w-9/12 bg-white rounded-sm border border-gray-200 p-1'>
                    <Tabs defaultValue="description" className="relative">
                        <TabsList className="rounded-none flex md:gap-4 bg-white ">
                            <TabsTrigger value="description" className="text-xs md:text-md text-gray-400 rounded-none shadow-none focus-visible:outline-none focus-visible:outline-0 focus-visible:border-none focus-visible:ring-0 
                            data-[state=active]:bg-transparent data-[state=active]:border-x-0    
                            data-[state=active]:border-t-0 data-[state=active]: border-b-2   
                            data-[state=active]:border-x-none data-[state=active]:shadow-none 
                            data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 ">Description</TabsTrigger>
                            <TabsTrigger value="reviews" className="text-xs md:text-md text-gray-400 rounded-none shadow-none focus-visible:outline-none focus-visible:outline-0 focus-visible:border-none focus-visible:ring-0 
                            data-[state=active]:bg-transparent data-[state=active]:border-x-0    
                            data-[state=active]:border-t-0 data-[state=active]: border-b-2   
                            data-[state=active]:border-x-none data-[state=active]:shadow-none 
                            data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 ">Reviews</TabsTrigger>
                            <TabsTrigger value="shipping" className="text-xs md:text-md text-gray-400 rounded-none shadow-none focus-visible:outline-none focus-visible:outline-0 focus-visible:border-none focus-visible:ring-0 
                            data-[state=active]:bg-transparent data-[state=active]:border-x-0    
                            data-[state=active]:border-t-0 data-[state=active]: border-b-2   
                            data-[state=active]:border-x-none data-[state=active]:shadow-none 
                            data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 ">Shipping</TabsTrigger>
                            <TabsTrigger value="about-seller" className="text-xs md:text-md text-gray-400 rounded-none shadow-none focus-visible:outline-none focus-visible:outline-0 focus-visible:border-none focus-visible:ring-0 
                            data-[state=active]:bg-transparent data-[state=active]:border-x-0    
                            data-[state=active]:border-t-0 data-[state=active]: border-b-2   
                            data-[state=active]:border-x-none data-[state=active]:shadow-none 
                            data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 ">About Seller</TabsTrigger>
                        </TabsList>
                        <Separator className="absolute top-8 " />
                        {/* Description tab data */}
                        <TabsContent value="description" className="p-3 flex flex-col gap-6">
                            <h2 className='text-xl'>Description Tab Content</h2>
                            <p className='text-sm md:text-md text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                            <Table className="w-full md:w-7/12 border border-gray-200">
                                <TableBody>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Model</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">#8786867</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Style</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">Classic style</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Certificate</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">ISO-898921212</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Size</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">34mm x 450mm x 19mm</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Memory</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">36GB RAM</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div className='flex flex-col gap-3'>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Some great feature name here</p>
                                </span>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                                </span>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Duis aute irure dolor in reprehenderit</p>
                                </span>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Some great feature name here</p>
                                </span>
                            </div>
                        </TabsContent>


                        {/* Reviews tab data */}
                        <TabsContent value="reviews" className="p-3 flex flex-col gap-6">
                            <h2 className='text-xl'>Reviews Tab Content</h2>
                            <p className='text-sm md:text-md text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                            <Table className="w-full md:w-7/12 border border-gray-200">
                                <TableBody>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Model</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">#8786867</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Style</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">Classic style</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Certificate</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">ISO-898921212</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Size</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">34mm x 450mm x 19mm</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Memory</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">36GB RAM</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div className='flex flex-col gap-3'>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Some great feature name here</p>
                                </span>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                                </span>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Duis aute irure dolor in reprehenderit</p>
                                </span>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Some great feature name here</p>
                                </span>
                            </div>
                        </TabsContent>






                        {/* Shipping tab data */}
                        <TabsContent value="shipping" className="p-3 flex flex-col gap-6">
                            <h2 className='text-xl'>Shipping Tab Content</h2>
                            <p className='text-sm md:text-md text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                            <Table className="w-full md:w-7/12 border border-gray-200">
                                <TableBody>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Model</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">#8786867</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Style</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">Classic style</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Certificate</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">ISO-898921212</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Size</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">34mm x 450mm x 19mm</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Memory</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">36GB RAM</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div className='flex flex-col gap-3'>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Some great feature name here</p>
                                </span>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                                </span>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Duis aute irure dolor in reprehenderit</p>
                                </span>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Some great feature name here</p>
                                </span>
                            </div>
                        </TabsContent>




                        {/* About Seller tab data */}
                        <TabsContent value="about-seller" className="p-3 flex flex-col gap-6">
                            <h2 className='text-xl'>About Seller Tab Content</h2>
                            <p className='text-sm md:text-md text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                            <Table className="w-full md:w-7/12 border border-gray-200">
                                <TableBody>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Model</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">#8786867</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Style</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">Classic style</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Certificate</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">ISO-898921212</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Size</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">34mm x 450mm x 19mm</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-none transition-none text-sm text-gray-600">
                                        <TableCell className=" bg-gray-100 w-4/12 ">Memory</TableCell>
                                        <TableCell className="w-8/12 hover:bg-white">36GB RAM</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div className='flex flex-col gap-3'>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Some great feature name here</p>
                                </span>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                                </span>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Duis aute irure dolor in reprehenderit</p>
                                </span>
                                <span className='text-sm text-gray-600 flex items-center gap-2'>
                                    <Check className='size-5' />
                                    <p>Some great feature name here</p>
                                </span>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
  )
}
