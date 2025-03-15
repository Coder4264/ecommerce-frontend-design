import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



export default function Cta() {
    return (
        <div className='relative bg-[url("/cta.png")] h-48 sm:h-96 bg-cover bg-center sm:rounded-sm my-4'>
            <div className='absolute top-6 left-4 sm:left-10 sm:top-12 w-7/12 sm:w-4/12 text-white grid  gap-4'>
                <h2 className='text-2xl sm:text-xl md:text-2xl lg:text-4xl font-semibold'>An easy way to send requests to all suppliers</h2>
                <Dialog>
                    <DialogTrigger>
                        <Button className="sm:hidden  bg-blue-500 text-white hover:bg-blue-600 rounded-sm w-fit cursor-pointer flex items-start justify-start">
                            Send inquiry
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Send quote to suppliers</DialogTitle>
                            <DialogDescription className="">
                                <div className="bg-white">
                                    <Input
                                        className="shadow-none focus-visible:ring-0 rounded-sm my-4"
                                        type="text"
                                        placeholder="What item you need?"
                                    />
                                    <Textarea
                                        className="shadow-none focus-visible:ring-0 placeholder:text-gray-400 rounded-sm focus-visible:border-ring-0 my-4"
                                        placeholder="Type more details"
                                    />
                                    <div className="flex items-center gap-2 my-4">
                                        <Input
                                            className="w-6/12 shadow-none rounded-sm focus-visible:ring-0"
                                            type="text"
                                            placeholder="Quantity"
                                        />
                                        <Select>
                                            <SelectTrigger className="w-3/12 shadow-none focus:ring-0 rounded-sm">
                                                <SelectValue placeholder="Pcs" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="10pcs">10 Pcs</SelectItem>
                                                <SelectItem value="20pcs">20 Pcs</SelectItem>
                                                <SelectItem value="30pcs">30 Pcs</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <Button className="flex items-start justify-start bg-blue-500 text-white hover:bg-blue-600 rounded-sm w-fit cursor-pointer">
                                        Send inquiry
                                    </Button>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>



                <p className='hidden sm:inline'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className='hidden sm:absolute top-8 right-8 md:w-6/12 lg:w-4/12 bg-white p-4 rounded-sm sm:grid gap-6'>
                <h2 className='text-lg font-semibold'>Send quote to suppliers</h2>
                <Input className="shadow-none focus-visible:ring-0 rounded-sm" type="text" placeholder="What item you need?" />
                <Textarea className="shadow-none focus-visible:ring-0 placeholder:text-gray-400 rounded-sm focus-visible:border-ring-0" placeholder="Type more details" />
                <div className='flex items-center gap-2'>
                    <Input className="w-6/12 shadow-none rounded-sm focus-visible:ring-0" type="text" placeholder="Quantity" />
                    <Select >
                        <SelectTrigger className="w-3/12 shadow-none focus:ring-0 rounded-sm">
                            <SelectValue placeholder="Pcs" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10pcs">10 Pcs</SelectItem>
                            <SelectItem value="20pcs">20 Pcs</SelectItem>
                            <SelectItem value="30pcs">30 Pcs</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button className="bg-blue-500 text-white hover:bg-blue-600 rounded-sm w-fit cursor-pointer">Send inquiry</Button>
            </div>
        </div>
    )
}
