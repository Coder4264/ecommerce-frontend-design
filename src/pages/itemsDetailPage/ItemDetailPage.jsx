import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ItemImages from './ItemImages';
import ItemDetails from './ItemDetails';
import SupplierCard from './SupplierCard';
import YouMayLike from './YouMayLike';
import RelatedProducts from './RelatedProducts';
import TabComponent from './TabComponent';
import CallToAction from './CallToAction';
import SimilarProducts from '../../components/SimilarProducts';



export default function ItemDetailPage() {
    return (
        <div className='w-full md:w-[85vw] m-auto flex flex-col gap-6'>
            {/* Breadcrumbs */}
            <Breadcrumb>
                <BreadcrumbList className="hidden sm:flex text-gray-400 pt-4">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Clothings</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-gray-400">Men's wear</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* Products specifications */}
            <div className='bg-white sm:p-4 sm:border border-gray-200 rounded-sm flex flex-col lg:flex-row items-start lg:justify-between gap-6'>
                {/* Product images */}
                <ItemImages />
                {/* Product details */}
                <ItemDetails />
                {/* Supplier card */}
                <SupplierCard />
            </div>
            {/* Product descriptions section */}
            <div className='flex flex-col lg:flex-row items-start gap-6'>
                {/* Tabs */}
                <TabComponent />
                {/* You may like section */}
                <YouMayLike />

                
            </div>
            {/* Related products  */}
            <div className='hidden md:block'>
            <RelatedProducts />
            </div>
            <div className='md:hidden block'>
                <SimilarProducts/>
            </div>
            <CallToAction/>
        </div>
    )
}
