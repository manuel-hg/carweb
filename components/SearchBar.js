"use client"

import { useState } from "react"
import { SearchManufacturer } from "."

export default () => {
    const [manufacturer, setManuFacturer] = useState('');
    const handleSearch = () => {}
    return(
        <form className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl" onSubmit={handleSearch}>
            <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
                <SearchManufacturer
                 manufacturer = {manufacturer}
                 setManuFacturer = {setManuFacturer}
                />
            </div>
        </form>
    )
}