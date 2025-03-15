import React from 'react';
import { Search, ReceiptText, SendHorizontal, ShieldCheck } from 'lucide-react';

export default function ExtraServices() {
    const data = [
        {
            id: 1,
            img: '/service1.png',
            icon: <Search />,
            description: 'Source from Industry Hubs',
        },
        {
            id: 2,
            img: '/service2.png',
            icon: <ReceiptText />,
            description: 'Customize Your Products',
        },
        {
            id: 3,
            img: '/service3.png',
            icon: <SendHorizontal />,
            description: 'Fast, reliable shipping by ocean or air',
        },
        {
            id: 4,
            img: '/service4.png',
            icon: <ShieldCheck />,
            description: 'Product monitoring and inspection',
        },
    ];

    return (
        <div className="my-6">
            {/* Title */}
            <h2 className="text-lg md:text-xl font-semibold py-6 px-2 md:px-0">
                Our Extra Services
            </h2>
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 md:px-0">
                {data.map(({ id, img, icon, description }) => (
                    <div
                        key={id}
                        className="relative bg-white border border-gray-200 rounded-sm hover:shadow-lg transition duration-500 ease-in-out"
                    >
                        {/* Service Image */}
                        <img
                            className="h-36 sm:h-40 md:h-36 w-full object-cover rounded-t-sm"
                            src={img}
                            alt={description}
                        />
                        <div className="absolute bg-black/40 inset-0 h-36 rounded-t-sm"></div>

                        {/* Icon */}
                        <div className="absolute top-[66%] right-4 transform -translate-y-1/2 w-12 h-12 bg-[#D1E7FF] border-2 border-white rounded-full flex items-center justify-center">
                            {icon}
                        </div>

                        {/* Description */}
                        <div className="bg-white p-4">
                            <p className="w-10/12 lg:w-9/12 text-md text-gray-700 font-medium ">
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}