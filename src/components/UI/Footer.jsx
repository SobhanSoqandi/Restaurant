import React from 'react'
import { GoChevronRight } from 'react-icons/go'

function Footer() {
    return (
        <div className="bg-black text-white flex justify-around p-5 items-center fixed w-full bottom-0 ">
            <div className="font-bold flex gap-5">
                <span> 1 pizza</span>
                <span> 12323$</span>
            </div>
            <div
                className="font-bold flex items-center hover:cursor-pointer group">
                <h2> Open Caart </h2>
                <GoChevronRight className="fill-white text-[20px] " />
            </div>
        </div>
    )
}

export default Footer