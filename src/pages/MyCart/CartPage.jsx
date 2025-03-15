import React from 'react'
import CallToAction from '../itemsDetailPage/CallToAction'
import CartItems from './CartItems';
import CheckOutSection from './CheckOutSection';
import SavedForLater from './SavedForLater';
import Facilities from './Facilities';


export default function CartPage() {
    return (
        <div className='w-full lg:w-[85vw] m-auto flex flex-col gap-6 py-6 px-2 lg:px-0'>
            <h2 className='text-2xl font-semibold'>My Cart (3)</h2>
            <div className='flex flex-col lg:flex-row items-start md:gap-2 lg:gap-4'>
                {/* Cart items section */}
                <CartItems/>

                {/* Checkout section */}
                <CheckOutSection/>
            </div>
            {/* Facilities section */}
            <Facilities/>
            


            {/* saved for later */}
            <SavedForLater/>

            <CallToAction />

        </div>
    )
}
