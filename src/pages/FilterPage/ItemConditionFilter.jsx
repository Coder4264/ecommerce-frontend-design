import React from 'react'
import { Input } from "@/components/ui/input"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function ItemConditionFilter() {
    return (
        <Accordion className="" type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-md font-md hover:no-underline transition ease-in-out duration-700 -my-2">
                    Condition
                </AccordionTrigger>
                {[
                    "Any",
                    "Refurbished",
                    "Brand new",
                    "Old items",
                ].map((item, index) => (
                    <AccordionContent
                        className='py-2 text-md flex items-center gap-2 duration-700'
                        key={index}
                        value={item}
                    >

                        <Input
                            type="radio"
                            className="w-4 h-4 accent-blue-500"
                        />
                        {item}

                    </AccordionContent>
                ))}
            </AccordionItem>
        </Accordion>
    )
}
