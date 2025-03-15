import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="md:border border-gray-200 bg-white md:p-4 md:my-5 rounded-lg">
      <div className="border-2 border-gray-200 flex md:hidden gap-1 items-center bg-gray-100 mx-3 rounded-sm mb-3 px-2 text-gray-700">
        <Search className="text-gray-400" />
        <Input type="search" className="border-none shadow-none focus-visible:ring-0 placeholder:text-gray-400" placeholder="Search" />
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-2">
        <div className="w-full md:w-56 lg:w-3/12 flex flex-row md:flex-col overflow-x-auto whitespace-nowrap px-3 scrollbar-hide">
          {[
            "Automobiles",
            "Clothes and Wear",
            "Home Interiors",
            "Computer and Tech",
            "Tools and Equipment",
            "Sports and Outdoor",
            "Animal and Pets",
            "Machinery Tools",
            "More Categories",
          ].map((item, index) => (
            <Link
              to="detail-page"
              key={index}
              className="text-sm text-blue-500 bg-gray-200 md:bg-transparent md:text-gray-600 hover:bg-[#E5F1FF] hover:text-black hover:font-medium cursor-pointer p-2 rounded-sm mr-2 md:mr-0"
            >
              {item}
            </Link>
          ))}
        </div>


        {/* Hero Image Section */}
        <div className="relative w-full lg:w-6/12 flex justify-center">
          <img src="/hero.png" alt="Hero section" className="md:rounded-sm" />
          <div className="absolute left-6 top-8 sm:left-10 lg:left-16 grid gap-2 md:gap-3 text-black">
            <p className="text-2xl lg:text-3xl font-light">Latest Trending</p>
            <p className="text-3xl lg:text-4xl font-bold">Electronic Items</p>
            <Button className="w-fit bg-white text-black hover:bg-[#E5F1FF] cursor-pointer px-4 py-2 rounded-sm">
              Learn More
            </Button>
          </div>
        </div>

        {/* User Info and Promotions Section */}
        <div className="w-full lg:w-3/12 hidden lg:grid gap-4">
          <div className="grid gap-3 p-4 bg-[#E5F1FF] rounded-sm">
            <div className="flex items-center gap-4">
              <img src="/avatar2.png" alt="User avatar" className="w-10 h-10" />
              <p className="text-sm text-gray-700">
                Hi, User <br />
                Let’s get started
              </p>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full h-10 rounded-sm">
              Join Now
            </Button>
            <Button className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 w-full h-10 rounded-sm">
              Login
            </Button>
          </div>

          {/* Promotions */}
          <div className="bg-orange-500 p-4 text-white rounded-sm text-sm">
            <p>
              Get US $10 off <br />
              with a new <br />
              supplier
            </p>
          </div>
          <div className="bg-teal-500 p-4 text-white rounded-sm text-sm">
            <p>
              Send quotes with <br />
              supplier <br />
              preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
