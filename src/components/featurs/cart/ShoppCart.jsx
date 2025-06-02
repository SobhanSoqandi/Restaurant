import React from 'react'
import { FaTrash } from 'react-icons/fa6';

function ShoppCart({item}) {
    return (


        <tbody>
            <tr className="bg-white border-b border-gray-200 text-gray-700">
                <th scope="row" className="px-6 py-4">
                    {item.name}
                </th>

                <td className="px-6 py-4">
                    X {item.quantity}
                </td>
                <td className="px-6 py-4">
                    $ {item.totalPrice}
                </td>

                <td className="px-6 py-4">
                    <button className="text-red-600 text-xl" > <FaTrash /> </button>
                </td>
            </tr>

        </tbody>
    )
}

export default ShoppCart;