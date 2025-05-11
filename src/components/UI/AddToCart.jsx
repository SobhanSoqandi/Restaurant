import React from 'react'
import { useState } from 'react'
import { FaCartPlus, FaTrash } from 'react-icons/fa6'
import { FiMinus, FiPlus } from 'react-icons/fi'
function AddToCart() {

    const [OrderNumber, setOrderNumber] = useState(0);


    return (
        <div className="flex justify-between w-44" >
            <div className="space-x-1 my-auto mt-6 text-xl" >
                {
                    OrderNumber > 0 ?

                        <button className="btn--add text-white bg-red-500"
                            onClick={() => setOrderNumber(0)}
                        >
                            <FaTrash />
                        </button>
                        :
                        <button
                            onClick={() => setOrderNumber(1)}
                            className="btn--add text-white bg-emerald-600 " >
                            <FaCartPlus />
                        </button>

                }



                {
                    OrderNumber > 0 ?
                    <>
                        <button
                            onClick={() => setOrderNumber(OrderNumber + 1)}
                            className="btn--add">
                            <FiPlus />
                        </button>
                          <span > {OrderNumber} </span>

                          <button
                              onClick={() => {
                                  if (OrderNumber > 0) {
                                      setOrderNumber(OrderNumber - 1);
                                  }
                              }}
          
                              className="btn--add">
                              <FiMinus />
          
                          </button>
                          </>
                        :
                        ""
                }





            </div>
        </div>
    )
}

export default AddToCart