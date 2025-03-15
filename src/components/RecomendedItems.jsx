import React from 'react'

export default function RecomendedItems() {
    const data = [
        {
            id: 1,
            img: "/shirt.png",
            price: "10.30",
            description: "T-shirts with multiple colors, for men",
        },
        {
            id: 2,
            img: "/jacket.png",
            price: "10.30",
            description: "Jeans shorts for men blue color",
        },
        {
            id: 3,
            img: "/coat.png",
            price: "12.50",
            description: "Brown winter coat medium size",
        },
        {
            id: 4,
            img: "/wallet.png",
            price: "34.00",
            description: "Jeans bag for travel for men",
        },
        {
            id: 5,
            img: "/bag.png",
            price: "99.00",
            description: "Leather wallet",
        },
        {
            id: 6,
            img: "/short.png",
            price: "9.99",
            description: "Canon camera black, 100x zoom",
        },
        {
            id: 7,
            img: "/headphone2.png",
            price: "8.99",
            description: "Headset for gaming with mic",
        },
        {
            id: 8,
            img: "/bag.png",
            price: "10.30",
            description: "Smartwatch silver color modern",
        },
        {
            id: 9,
            img: "/mudutensil.png",
            price: "10.30",
            description: "Blue wallet for men leather metarfial",
        },
        {
            id: 10,
            img: "/cattle.png",
            price: "80.95",
            description: "Jeans bag for travel for men",
        },
    ];
    
  return (
    <div className='my-4'>
        <h2 className='text-lg md:text-xl font-semibold py-6 px-2 md:px-0 '>Recomended Items</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4 p-2 sm:p-0'>
            {data.map(({id, img, price, description})=>(
                <div className='border border-gray-200 rounded-sm bg-white px-4 py-2 hover:shadow-lg duration-700' key={id}>
                <img src={img} className='mx-auto w-full' alt={description} />
                <div>
                    <p className='text-md font-semibold'>${price}</p>
                    <p className='text-sm text-gray-500'>{description}</p>
                </div>
            </div>
            ))}
            
        </div>
    </div>
  )
}
