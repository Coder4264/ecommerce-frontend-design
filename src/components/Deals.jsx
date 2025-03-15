import React from 'react'
import CountDownTimer from './CountDownTimer'
import { Link } from 'react-router-dom'


export default function Deals() {
const data = [
        {
            id: 1,
            img: "/watch.png",
            title: "Smart watches",
            discount: -25,
        },
        {
            id: 2,
            img: "./laptop.png",
            title: "Laptops",
            discount: -15,
        },
        {
            id: 3,
            img: "/camera.png",
            title: "GoPro cameras",
            discount: -40,
        },
        {
            id: 4,
            img: "/headphone.png",
            title: "Headphones",
            discount: -25,
        },
        {
            id: 5,
            img: "/mobile.png",
            title: "Canon cameras",
            discount: -25,
        },
    ]
  return (
    <div className='md:border border-gray-200 bg-white rounded-sm flex flex-col md:flex-row justify-between  my-4 shadow-md md:shadow-none'>
        <div className='w-full md:w-110 flex flex-row justify-between md:justify-start md:flex-col items-start gap-4 p-2 md:p-6'>
            <div>
            <p className='text-lg md:text-xl font-semibold'>Deals and offers</p>
            <p className='text-sm text-gray-400'>Hygiene equipment</p>
            </div>
            <CountDownTimer/>
        </div>
        <div className="w-full flex items-center justify-between overflow-x-auto lg:overflow-visible whitespace-nowrap scrollbar-hide">
  {data.map(({ id, title, img, discount }) => (
    <Link
    to="filter-page"
      className="flex items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-full"
      key={id}
    >
      <div className="w-36 lg:w-full flex flex-col  items-center gap-2 p-4 border-t border-l md:border-t-0 border-gray-200">
        <img className="w-full h-full object-contain" src={img} alt={title} />
        <p className="text-md font-medium text-gray-700">{title}</p>
        <p className="bg-red-100 font-medium text-red-600 px-2 py-1 rounded-full text-xs w-fit">
          {discount}%
        </p>
      </div>
    </Link>
  ))}
</div>

        
    </div>
  )
}
