import React from 'react';

export default function SimilarProducts() {
  return (
    <div className="w-full lg:w-3/12 md:bg-white border border-gray-200 rounded-sm p-4">
      <p className="text-lg font-semibold mb-4">Similar Products</p>
      <div className="flex md:grid md:grid-cols-1 gap-4 overflow-x-auto sm:overflow-x-hidden scrollbar-hide whitespace-nowrap sm:whitespace-none">
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
            className="flex md:flex-row flex-col items-start gap-3 bg-white  md:border-0 border-gray-200 p-2 rounded-sm"
          >
            <img
              src={product.image}
              className="w-full md:w-16 md:h-16 object-cover md:border border-gray-200 rounded-sm"
              alt={product.name}
            />
            <div className="flex-1">
              <p className="text-sm text-gray-700 truncate md:whitespace-normal">{product.name}</p>
              <p className="text-sm text-gray-400">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
