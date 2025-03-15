import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

export default function FeaturesFilter() {
    return (
        <Accordion className="" type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-md font-md hover:no-underline transition ease-in-out duration-700 -my-2">
                    Features
                </AccordionTrigger>
                {[
                    "Metalic",
                    "Plastic cover",
                    "8GB Ram",
                    "Super power",
                    "Large memory",
                    "See all",
                ].map((item, index) => (
                    <AccordionContent
                        className={`py-2 text-md flex items-center gap-2 ${item === "See all" ? "text-blue-500" : "text-gray-600"
                            } duration-700`}
                        key={index}
                    >
                        {item !== "See all" && (
                            <Input
                                type="checkbox"
                                className="w-4 h-4 accent-blue-500"
                            />
                        )}
                        {item}
                    </AccordionContent>
                ))}
            </AccordionItem>
        </Accordion>
    )
}
