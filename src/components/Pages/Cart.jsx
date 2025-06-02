import React from 'react'
import Header from '../UI/Header';
import ShoppCart from '../featurs/cart/ShoppCart';
import { useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa6';

function Cart() {

  const state = useSelector((state) => state);
  // const name = useSelector((state) => state.AuthSlice.name);

  console.log(state.Cart);



  return (

    <div>

      <h1 className="m-10 font-bold text-2xl" > Your cart ,  {state.AuthSlice.name} </h1>

      <div className="relative overflow-x-auto rounded-xl border m-10">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-sm text-white bg-red-500 ">
            <tr className="">
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3">
                number
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                OP
              </th>
            </tr>
          </thead>

          {
            state.Cart.map((item) => (
              <ShoppCart item={item} key={item.pizzaId} />
            ))
          }


        </table>


      </div>

      <button className="btn float-right m-10 px-20" > Next </button>

    </div>





  )
}

export default Cart;