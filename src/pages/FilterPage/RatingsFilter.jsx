import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { Input } from "@/components/ui/input"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function RatingsFilter() {
    return (
        <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-md font-semibold hover:no-underline transition ease-in-out duration-700 -my-2">
                    Ratings
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-col space-y-2 mt-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <button
                                key={rating}
                                onClick={() => setMinRating(rating)}
                                className={`flex items-center  py-2 w-full rounded-lg`}
                            >
                                {/* Rating Stars */}
                                <div className="flex items-center">
                                    <Input type="checkbox" className="mr-2 w-4 h-4 accent-blue-400" />
                                    {[...Array(5)].map((_, i) => (

                                        <AiFillStar
                                            key={i}
                                            size={22}
                                            className={i < rating ? "text-yellow-500" : "text-gray-300"}
                                        />
                                    ))}
                                </div>
                            </button>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
