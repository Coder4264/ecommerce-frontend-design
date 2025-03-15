import React from 'react'

export default function RelatedProducts() {
    const data = [
        {
            id: 1,
            img: "/wallet-bg.png",
            title: "Xiaomi Redmi 8 Original ",
            startPrice: 32.00,
            lastPrice: 40.00
        },
        {
            id: 2,
            img: "/watch-bg.png",
            title: "Xiaomi Redmi 8 Original ",
            startPrice: 32.00,
            lastPrice: 40.00
        },
        {
            id: 3,
            img: "/headphone2-bg.png",
            title: "Xiaomi Redmi 8 Original ",
            startPrice: 32.00,
            lastPrice: 40.00
        },
        {
            id: 4,
            img: "/short-bg.png",
            title: "Xiaomi Redmi 8 Original ",
            startPrice: 32.00,
            lastPrice: 40.00
        },
        {
            id: 5,
            img: "/cattle-bg.png",
            title: "Xiaomi Redmi 8 Original ",
            startPrice: 32.00,
            lastPrice: 40.00
        },
        {
            id: 6,
            img: "/rept-bg.png",
            title: "Xiaomi Redmi 8 Original ",
            startPrice: 32.00,
            lastPrice: 40.00
        },
    ]
    return (
        <div className="border border-gray-200 rounded-sm bg-white p-3">
            <p className="text-lg font-semibold mb-4">Related products</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {data.map((item, index) =>(
                    <div className="grid gap-2" key={index}>
                    <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-sm">
                        <img
                            src={item.img}
                            className="w-full object-cover rounded-sm"
                            alt={item.title}
                        />
                    </div>
                    <span className="grid gap-1">
                        <p className="text-sm text-gray-600">{item.title}</p>
                        <p className="text-sm text-gray-400">${item.startPrice}-${item.lastPrice}</p>
                    </span>
                </div>
                ))}
                
            </div>
        </div>
    )
}
