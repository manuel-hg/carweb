"use client"
import { Combobox, Transition } from "@headlessui/react"
import Image from "next/image"
import { useState, Fragment } from "react"
import { manufacturers } from "@/constants"

export default ({manufacturer, setManuFacturer}) => {
    const [query, setQuery] = useState('');
    const filteredManufacturers = 
        query === "" 
        ? manufacturers 
        : manufacturers.filter((item) => {
            item.toLocaleLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        }
    ) 
    return (
        <div className="flex-1 max-sm:w-full flex justify-start items-center">
            <Combobox>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]" id="combo">
                        <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="Car Logo"/>
                    </Combobox.Button>
                    <Combobox.Input 
                        className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
                        placeholder="Volskwagen"
                        displayValue={(manufacturer) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    >
                    </Combobox.Input>
                    <Transition 
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}>
                        <Combobox.Options>
                            {filteredManufacturers.length === 0 && query !== "" ? (
                                <Combobox.Option value={query} className="cursor-default select-none py-2 pl-10 pr-4">                            
                                    Create "{query}"
                                </Combobox.Option>
                            ):(
                                filteredManufacturers.map((item) => {
                                    <Combobox.Option>

                                    </Combobox.Option>
                                })
                            )
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}