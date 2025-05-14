import React from 'react'

function Input({ label, type, placeholder }) {
    return (
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-4/12">
                <label class="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    {label}
                </label>
            </div>
            <div class="md:w-8/12 ">
                <input
                    placeholder={placeholder}
                    type={type}
                    class="shadow-md w-full border-2 border-gray-200 rounded-xl py-2 px-4 focus:outline-none focus:bg-white focus:border-green-600" />
            </div>
        </div>
    )
}

export default Input