import React from 'react'
import Header from '../UI/Header'

function SingleOrdedr() {
    return (
            <div className="container mx-auto p-5 py-20" >
                <div className="flex justify-between" >
                    <h1 className="py-4 font-bold text-2xl" > Order Single Delivered </h1>
                    <div className="space-x-5">
                        <button className="btn" > delivered </button>
                        <button className="btn bg-red-500" > priority </button>
                    </div>
                </div>
                <div className="flex justify-between bg-gray-200 p-4 rounded-xl" >
                    <h2 > Order Shoude have arrived </h2>
                    <span> 2025-04-29 17:11:09 </span>
                </div>
                <table class="w-full text-sm text-left text-gray-700 my-5 ">
                    <thead class="text-sm ">
                        <tr className="">
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>

                            <th scope="col" class="px-6 py-3">
                                number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b border-gray-200 text-gray-700">
                            <th scope="row" class="px-6 py-4">
                                Apple MacBook Pro 17"
                            </th>

                            <td class="px-6 py-4">
                                X 4
                            </td>
                            <td class="px-6 py-4">
                                $299
                            </td>


                        </tr>

                    </tbody>
                </table>
                <div className="bg-gray-200 p-4 rounded-xl" >
                    <span> Total Price : 65$ </span>
                </div>
            </div>
    )
}

export default SingleOrdedr