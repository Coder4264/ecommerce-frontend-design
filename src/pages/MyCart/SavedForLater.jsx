import React from 'react';
import { Button } from "@/components/ui/button";
import { BsCart3 } from "react-icons/bs";

const products = [
  { id: 1, image: "/watch-bg.png", price: "$99.50", name: "GoPro HERO6 4K Action Camera - Black" },
  { id: 2, image: "/watch-bg.png", price: "$99.50", name: "GoPro HERO6 4K Action Camera - Black" },
  { id: 3, image: "/watch-bg.png", price: "$99.50", name: "GoPro HERO6 4K Action Camera - Black" },
  { id: 4, image: "/watch-bg.png", price: "$99.50", name: "GoPro HERO6 4K Action Camera - Black" },
  { id: 5, image: "/watch-bg.png", price: "$99.50", name: "GoPro HERO6 4K Action Camera - Black" },
];

export default function SavedForLater() {
  return (
    <div className="border border-gray-200 rounded-sm bg-white p-3">
      <p className="text-lg font-semibold mb-4">Related products</p>
      <div className="flex gap-4  overflow-x-auto scrollbar-hide">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] flex-shrink-0 sm:min-w-0 sm:grid gap-2"
          >
            <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-sm">
              <img
                src={product.image}
                className="w-full object-cover rounded-sm"
                alt={product.name}
              />
            </div>
            <span className="grid gap-1">
              <p className="text-md font-semibold">{product.price}</p>
              <p className="text-sm text-gray-400">{product.name}</p>
              <Button className="w-7/12 flex items-center gap-1 text-blue-500 bg-white border border-gray-200 hover:bg-gray-100 shadow-none rounded-sm">
                <BsCart3 className="size-5" />
                Move to cart
              </Button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
