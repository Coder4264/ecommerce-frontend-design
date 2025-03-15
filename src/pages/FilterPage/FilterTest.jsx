import React, { useState } from 'react'
import { Separator } from "@/components/ui/separator"
import { ChevronRight, ChevronLeft, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import CategoryFilter from './CategoryFilter';
import BrandFilter from './BrandFilter';
import FeaturesFilter from './FeaturesFilter';
import PriceRangeFilter from './PriceRangeFilter';
import ItemConditionFilter from './ItemConditionFilter';
import ViewTypeAndMisc from './ViewTypeAndMisc';
import ListView from './ListView';
import GridView from './GridView';
import RatingsFilter from './RatingsFilter';
import YouMayLike from '../itemsDetailPage/YouMayLike'


export default function FilterTest() {
    const [viewType, setViewType] = useState("list")
    const [minRating, setMinRating] = useState(0);

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
        <div className='w-full md:w-[85vw] m-auto px-2 md:px-0'>
            {/* Breadcrumbs */}
            <Breadcrumb>
                <BreadcrumbList className="hidden md:flex text-gray-400 py-4">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Mobile</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-gray-400">Accessories</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='sm:hidden grid pb-4'>
                <div className="border-2 border-gray-200 flex md:hidden gap-1 items-center bg-gray-100 mx-3 rounded-sm mb-3 px-2 text-gray-700">
                    <Search className="text-gray-400" />
                    <Input type="search" className="border-none shadow-none focus-visible:ring-0 placeholder:text-gray-400" placeholder="Search" />
                </div>
                <div className="w-full md:w-56 lg:w-3/12 flex flex-row md:flex-col overflow-x-auto whitespace-nowrap px-3 scrollbar-hide">
                    {[
                        "Tablet",
                        "Phones",
                        "IPad",
                        "IPod",
                        "Laptops",
                        "Desktop",
                        "LED",
                        "Smart TV",
                        "Play Station",
                    ].map((item, index) => (
                        <Link
                            to="/detail-page"
                            key={index}
                            className="text-sm text-blue-500 bg-gray-200 md:bg-transparent md:text-gray-600 hover:bg-[#E5F1FF] hover:text-black hover:font-medium cursor-pointer p-2 rounded-sm mr-2 md:mr-0"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>

            <div className='flex gap-6'>
                <div className='hidden md:block h-full w-2/12'>
                    <Separator />
                    <CategoryFilter />
                    <Separator />
                    <BrandFilter />
                    <Separator />
                    <FeaturesFilter />
                    <Separator />
                    <PriceRangeFilter />
                    <Separator />
                    <ItemConditionFilter />
                    <Separator />
                    <RatingsFilter />
                </div>

                {/* Cards and items main rendering */}

                <div className='w-full md:w-9/12 h-full flex flex-col gap-4 md:gap-6'>
                    {/* Listing header with layout options */}
                    <ViewTypeAndMisc viewType={viewType} setViewType={setViewType} />
                    <div className="flex sm:hidden items-center gap-3 w-full overflow-x-auto whitespace-nowrap px-3 scrollbar-hide">
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

                    {/* List view */}
                    <ListView viewType={viewType} />

                    {/* Grid View */}
                    <GridView viewType={viewType} />
                    <div className="block sm:hidden">
                    <YouMayLike className="flex"/>
                    </div>



                    {/* Pagination */}
                    <div className='flex items-end justify-end'>
                        <div className='flex items-center gap-4'>
                            <Select >
                                <SelectTrigger className="w-[130px] rounded-sm border border-gray-200 focus:ring-0 shadow-none bg-white">
                                    <SelectValue placeholder="Show 10" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="show10" >Show 10</SelectItem>
                                    <SelectItem value="show20">Show 20</SelectItem>
                                    <SelectItem value="show30">Show 30</SelectItem>
                                    <SelectItem value="show40">Show 40</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className='flex items-center bg-white rounded-sm cursor-pointer'>
                                <div className='w-9 h-9 border text-gray-300 p-2 rounded-l-sm hover:bg-gray-200 border-gray-200 flex items-center justify-center'>
                                    <ChevronLeft />
                                </div>
                                <div className='w-9 h-9 border bg-gray-100 text-gray-400 hover:bg-gray-200 border-gray-200 flex items-center justify-center'>
                                    1
                                </div>
                                <div className='w-9 h-9 border border-gray-200 hover:bg-gray-200 flex items-center justify-center'>
                                    2
                                </div>
                                <div className='w-9 h-9 border border-gray-200 hover:bg-gray-200 flex items-center justify-center'>
                                    3
                                </div>
                                <div className='w-9 h-9 p-2 border rounded-r-sm border-gray-200 hover:bg-gray-200 flex items-center justify-center'>
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}
