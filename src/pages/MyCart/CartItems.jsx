import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Plus, Minus, EllipsisVertical } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function CartItems() {
    const [count, setCount] = useState(0)
    const handleIncrement = () => setCount((num) => num + 1)
    const handleDecrement = () => setCount((num) => Math.max(num - 1, 0))
    return (
        <div className="w-full lg:w-9/12 border border-gray-200 bg-white p-4 rounded-sm grid gap-6">
            {/* Product Cards */}
            {[
                {
                    id: 1,
                    img: "/shirt-bg.png",
                    title: "T-shirts with multiple colors, for men and lady",
                    details: "Size: medium, Color: blue, Material: Plastic",
                    seller: "Seller: Artel Market",
                    price: "$78.99",
                },
                {
                    id: 2,
                    img: "/bag-bg.png",
                    title: "Bag with multiple compartments, for men and women",
                    details: "Size: large, Color: black, Material: Leather",
                    seller: "Seller: Artel Market",
                    price: "$59.99",
                },
                {
                    id: 3,
                    img: "/lamp-bg.png",
                    title: "Lamp with adjustable brightness",
                    details: "Size: standard, Color: white, Material: Glass",
                    seller: "Seller: Artel Market",
                    price: "$34.99",
                },
            ].map((product) => (
                <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0" key={product.id}>
                    <div className="w-full hidden lg:flex items-start gap-2 md:gap-5">
                        <img
                            className="w-24 h-24 object-cover border border-gray-200 rounded-sm"
                            src={product.img}
                            alt={product.title}
                        />
                        <div className="flex flex-col gap-1">
                            <p className="text-md font-semibold">{product.title}</p>
                            <p className="text-sm text-gray-400">{product.details}</p>
                            <p className="text-sm text-gray-400">{product.seller}</p>
                            <div className="hidden lg:flex items-center gap-3 mt-2">
                                <Button className="bg-white hover:bg-gray-100 shadow-none rounded-sm border border-gray-200 text-red-500">
                                    Remove
                                </Button>
                                <Button className="bg-white hover:bg-gray-100 shadow-none rounded-sm border border-gray-200 text-blue-600">
                                    Save for later
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile screen */}
                    <div className="w-full lg:hidden flex items-start justify-between gap-2 md:gap-5">
                        <div className='flex items-start gap-2 md:gap-5'>
                            <img
                                className="w-20 h-28 sm:w-24 sm:h-24 object-cover border border-gray-200 rounded-sm"
                                src={product.img}
                                alt={product.title}
                            />
                            <div className="flex flex-col gap-1">
                                <p className="text-md font-semibold leading-tight">{product.title}</p>
                                <p className="text-sm text-gray-400">{product.details}</p>
                                <p className="text-sm text-gray-400">{product.seller}</p>
                                <div className="hidden lg:flex items-center gap-3mt-2">
                                    <Button className="bg-white hover:bg-gray-100 shadow-none rounded-sm border border-gray-200 text-red-500">
                                        Remove
                                    </Button>
                                    <Button className="bg-white hover:bg-gray-100 shadow-none rounded-sm border border-gray-200 text-blue-600">
                                        Save for later
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="focus:ring-0"><EllipsisVertical className='text-gray-400 size-5'/></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Remove</DropdownMenuItem>
                                <DropdownMenuItem>Save for later</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <div className="hidden lg:flex flex-col items-end gap-3">
                        <p className="text-md font-semibold">{product.price}</p>
                        <Select>
                            <SelectTrigger className="flex w-[130px] border border-gray-200 rounded-sm shadow-none focus:ring-0">
                                <SelectValue placeholder="Quantity" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-6/12 sm:w-3/12 flex lg:hidden items-center'>
                            <Button onClick={handleDecrement} className="bg-white hover:bg-gray-100 text-gray-500 border border-gray-200 rounded-none rounded-l-sm shadow-none"><Minus className='size-5' /></Button>
                            <Input type="text" readOnly value={count} className="focus-visible:ring-0 text-black text-center rounded-none shadow-none"></Input>
                            <Button onClick={handleIncrement} className="bg-white hover:bg-gray-100 text-gray-500 border border-gray-200 rounded-none rounded-r-sm shadow-none"><Plus className='size-5' /></Button>

                        </div>
                        <p className="inline lg:hidden text-md font-semibold">{product.price}</p>
                    </div>
                </div>

            ))}
            <div className='hidden lg:block'>

                <Separator />
            </div>

            {/* Cart Buttons */}
            <div className="hidden lg:flex items-center justify-between">
                <Button className="flex items-center gap-1 bg-blue-500 text-white hover:bg-blue-600 shadow-none rounded-sm">
                    <ArrowLeft />
                    Back to shop
                </Button>
                <Button className="flex items-center gap-1 bg-white text-red-500 border border-gray-200 hover:bg-gray-100 shadow-none rounded-sm">
                    Remove all
                </Button>
            </div>
        </div>
    )
}
