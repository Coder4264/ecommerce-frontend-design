import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function PriceRangeFilter() {

    const [minValue, setMinValue] = useState(0); // Input for Minimum Value
    const [maxValue, setMaxValue] = useState(100); // Input for Maximum Value
    const [range, setRange] = useState({ min: 0, max: 100 }); // Range slider values
    const [sliderValues, setSliderValues] = useState([0, 100]); // Values for the slider tips

    const handleSubmit = () => {
        if (minValue < maxValue) {
            setRange({ min: minValue, max: maxValue });
            setSliderValues([minValue, maxValue]);
        } else {
            alert("Minimum value must be less than the maximum value!");
        }
    };

    const handleSliderChange = (e) => {
        const newValue = Number(e.target.value);
        if (e.target.name === "min") {
            setMinValue(newValue);
            if (newValue < maxValue) {
                setSliderValues([newValue, sliderValues[1]]);
            }
        } else {
            setMaxValue(newValue);
            if (newValue > minValue) {
                setSliderValues([sliderValues[0], newValue]);
            }
        }
    };
    return (
        <Accordion className="" type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-md font-md hover:no-underline transition ease-in-out duration-700 -my-2">
                    Price range
                </AccordionTrigger>

                <AccordionContent className='text-md flex items-center'>
                    <div className="">

                        {/* Range Slider */}
                        <div className="relative w-full mb-6">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>{sliderValues[0]}</span>
                                <span>{sliderValues[1]}</span>
                            </div>
                            <div className="relative h-1 bg-blue-100 rounded-full">
                                <div
                                    className="absolute h-1 bg-blue-500 rounded-full"
                                    style={{
                                        left: `${((sliderValues[0] - range.min) / (range.max - range.min)) * 100}%`,
                                        right: `${100 - ((sliderValues[1] - range.min) / (range.max - range.min)) * 100}%`,
                                    }}
                                ></div>
                            </div>
                            <input
                                type="range"
                                name="min"
                                min={range.min}
                                max={range.max}
                                value={sliderValues[0]}
                                onChange={handleSliderChange}
                                className="absolute appearance-none w-full h-0 bg-transparent pointer-events-auto z-10 
          [&::-webkit-slider-thumb]:appearance-none 
          [&::-webkit-slider-thumb]:w-4 
          [&::-webkit-slider-thumb]:h-4 
          [&::-webkit-slider-thumb]:bg-white 
          [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:border 
          [&::-webkit-slider-thumb]:border-blue-500 
          [&::-webkit-slider-thumb]:shadow-md"
                            />
                            <input
                                type="range"
                                name="max"
                                min={range.min}
                                max={range.max}
                                value={sliderValues[1]}
                                onChange={handleSliderChange}
                                className="absolute appearance-none w-full h-0 bg-transparent pointer-events-auto z-10 
      [&::-webkit-slider-thumb]:appearance-none 
      [&::-webkit-slider-thumb]:w-4 
      [&::-webkit-slider-thumb]:h-4 
      [&::-webkit-slider-thumb]:bg-white 
      [&::-webkit-slider-thumb]:rounded-full 
      [&::-webkit-slider-thumb]:border 
      [&::-webkit-slider-thumb]:border-blue-500 
      [&::-webkit-slider-thumb]:shadow-md"
                            />

                        </div>

                        {/* Input Fields */}
                        <div className="flex  gap-4">
                            <div className="flex flex-col items-start justify-between">
                                <label className="text-sm text-gray-600">Min</label>
                                <input
                                    type="number"
                                    value={minValue}
                                    onChange={(e) => setMinValue(Number(e.target.value))}
                                    className="w-24 p-2 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                />
                            </div>

                            <div className="flex flex-col items-start justify-between">
                                <label className="text-sm text-gray-600">Max</label>
                                <input
                                    type="number"
                                    value={maxValue}
                                    onChange={(e) => setMaxValue(Number(e.target.value))}
                                    className="w-24 p-2 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring "
                                />
                            </div>

                        </div>
                        {/* Submit Button */}
                        <Button
                            onClick={handleSubmit}
                            className="mt-3 w-full bg-white text-blue-500 hover:text-white shadow-none border border-gray-200 hover:bg-blue-600 transition"
                        >
                            Apply
                        </Button>
                    </div>

                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
