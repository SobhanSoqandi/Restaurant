import React from 'react'
import { BiSearch } from 'react-icons/bi'

function Header() {
    return (
        <header className="bg-red-500 " >
            <div className="container mx-auto flex p-2" >
                <img src="img\pizza-logo2-removebg-preview.png" className="w-10" alt="" />
                <h1 className="text-white text-xl my-auto" > fast React Pizza </h1>
                <form class="max-w-sm ml-auto mr-5">
                    <div class="relative">
                        <button class="absolute inset-y-0 start-0 flex items-center ps-3 text-green-700 pointer-events-none">
                            <BiSearch />
                        </button>
                        <input
                            class="block w-full p-2 ps-10 text-sm appearance-none border-2 border-gray-200 rounded-xl py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-600"
                            placeholder="Search your food"
                        />
                    </div>
                </form>
            </div>
        </header>
    )
}

export default Header