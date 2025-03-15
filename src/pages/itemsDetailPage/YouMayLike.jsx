import React from 'react';

export default function YouMayLike() {
  return (
    <div className="hidden lg:block w-full lg:w-3/12 md:bg-white border border-gray-200 rounded-sm p-2 lg:p-4">
      <p className="text-lg font-semibold mb-4">You may like</p>
      <div className="flex items-center md:grid md:grid-cols-1 gap-4 overflow-x-auto md:overflow- scrollbar-hide whitespace-nowrap md:whitespace-normal">
        {/* Product Cards */}
        {[
          {
            image: '/coat.png',
            name: 'Men Blazers Sets Elegant Formal',
            price: '$7.00 - $99.50',
          },
          {
            image: '/shirt.png',
            name: 'Men Shirt Sleeve Polo Contrast',
            price: '$7.00 - $99.50',
          },
          {
            image: '/jacket.png',
            name: 'Apple Watch Series Space Gray',
            price: '$7.00 - $99.50',
          },
          {
            image: '/shirt2.png',
            name: 'Basketball Crew Socks Long Stuff',
            price: '$7.00 - $99.50',
          },
          {
            image: '/bag.png',
            name: "New Summer Men's Castrol T-Shirts",
            price: '$7.00 - $99.50',
          },
          {
            image: '/headphone.png',
            name: 'Men Blazers Sets Elegant Formal',
            price: '$7.00 - $99.50',
          },
        ].map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-3 bg-white border md:border-none border-gray-200 p-2 rounded-sm"
          >
            <img
              src={product.image}
              className="w-full md:w-16 md:h-16 object-cover border-gray-200 rounded-sm"
              alt={product.name}
            />
            <div className="flex-1">
              <p className="w-fulllg:w-9/12 text-sm text-gray-700">{product.name}</p>
              <p className="text-sm text-gray-400">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
