
'use client'
import Image from "next/image"

export default ({title, containerStyles, handleClick}) => {
    return(
        <button
            disabled={false}
            type={"button"}
            className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
            onClick={handleClick}
        >
            <span className="flex-1 ">
                {title}
            </span>
        </button>
    )
}