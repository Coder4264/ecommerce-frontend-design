import React from 'react'
import { IoMdMenu } from "react-icons/io";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";
const countries = [
    { value: "us", flag: "https://www.worldometers.info/img/flags/small/tn_us-flag.gif" },
    { value: "fr", flag: "https://www.worldometers.info/img/flags/small/tn_fr-flag.gif" },
    { value: "de", flag: "https://www.worldometers.info/img/flags/small/tn_gm-flag.gif" },
];

export default function Menu() {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    return (
        <main className='border-y border-gray-200 py-2 hidden lg:block'>
            <section className='w-[85vw] m-auto flex items-center justify-between'>
                <ul className='text-[16px] flex items-center gap-6'>
                    <li className='flex items-center gap-1'>
                        <IoMdMenu size="20" />
                        <p className='font-medium'>
                            All Categories
                        </p>
                    </li>
                    <li className='font-medium'>
                        Hot Offers
                    </li>
                    <li className='font-medium'>
                        Gift boxes
                    </li>
                    <li className='font-medium'>
                        Projects
                    </li>
                    <li className='font-medium'>
                        Menu items
                    </li>
                    <li className='font-medium'>
                        Help
                    </li>

                </ul>
                <ul className='flex gap-6'>
                    <li>
                        <Select >
                            <SelectTrigger className="w-auto rounded-none border-0 shadow-none text-black focus:ring-0 font-medium text-[16px]">
                                <SelectValue placeholder="English, USD" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light" className="hover:bg-" selected>Urdu, Pakistan</SelectItem>
                                <SelectItem value="dark">English, UK</SelectItem>
                                <SelectItem value="system">Arabic, UAE</SelectItem>
                            </SelectContent>
                        </Select>
                    </li>
                    <li className='flex items-center text-[16px]'>
                        <p className='font-medium'>Ship to</p>
                        <Select
                            onValueChange={(value) => {
                                const country = countries.find((e) => e.value === value);
                                setSelectedCountry(country);
                            }}
                        >
                            <SelectTrigger className="w-fit border-none shadow-none focus:ring-0 gap-1">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={selectedCountry.flag}
                                        alt={selectedCountry.label}
                                        className="w-6 h-4"
                                    />
                                    {selectedCountry.label}
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                {countries.map((country) => (
                                    <SelectItem key={country.value} value={country.value}>
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={country.flag}
                                                alt={country.label}
                                                className="w-6 h-4"
                                            />
                                            {country.label}
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </li>
                </ul>

            </section>
        </main>
    )
}
