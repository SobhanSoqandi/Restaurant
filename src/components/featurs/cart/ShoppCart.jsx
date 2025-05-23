import React from 'react'
import { FaTrash } from 'react-icons/fa6';

function ShoppCart() {
    return (
        <div className="container mx-auto" >
            <h1 className="text-2xl font-bold py-10" > Your Cart Test </h1>


            <div class="relative overflow-x-auto rounded-xl border">
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-sm text-white bg-red-500 ">
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
                            <th scope="col" class="px-6 py-3">
                                OP
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

                            <td class="px-6 py-4">
                                <button className="text-red-600 text-xl" > <FaTrash /> </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

<button className="btn float-right my-10 px-20" > Next </button>


        </div>
    )
}

export default ShoppCart;