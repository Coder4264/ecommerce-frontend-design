import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function CategoryDropDown() {
    return (
        <Accordion className="" type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger className='text-md font-md hover:no-underline transition ease-in-out duration-700 -my-2'>Categories</AccordionTrigger>
                {[
                    "Mobile accessories",
                    "Electronics",
                    "Smartphones",
                    "Modern tech",
                    "See all",
                ].map((item, index) => (
                    <AccordionContent className={`py-2 text-md ${item === "See all" ? "text-blue-500" : "text-gray-600"
                        } duration-700`}
                        key={index}>
                        {item}
                    </AccordionContent>

                ))}


            </AccordionItem>
        </Accordion>
    )
}
