
import { useState } from 'react'
import { FaCartPlus, FaTrash } from 'react-icons/fa6'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { AddItem , decerment, deleted, Incrase } from '../featurs/cart/CartSlice';
import { useDispatch } from 'react-redux';
function AddToCart({ item, id, length }) {

    const dispatch = useDispatch();


    const [OrderNumber, setOrderNumber] = useState(0);


    const Item = {
        pizzaId: 0,
        name: "",
        quantity: 0,
        unitPrice: 0,
        totalPrice: 0,
        ingredients: [],
    };


    const AddToCart = () => {
        const data = {
            ...Item,
            pizzaId: item.id,
            unitPrice: item.unitPrice,
            name: item.name,
            totalPrice: item.unitPrice,
            quantity: 1,
            ingredients: item.ingredients,
        };
        dispatch(AddItem(data));
        setOrderNumber(OrderNumber + 1);
        console.log(item);

    };

    const incrase = () => {
        dispatch(Incrase(item.id));
        setOrderNumber(OrderNumber + 1)
    }

    const Decerment = () => {
        dispatch(decerment(item.id));
        setOrderNumber(OrderNumber - 1)
    }

    const Delete = () => {
        dispatch(deleted(item.id));
        setOrderNumber(0)
    }

    return (
        <div className="flex justify-between w-44" >
            <div className="space-x-1 my-auto mt-6 text-md" >
                {
                    OrderNumber > 0 ?

                        <button className="btn--add text-white bg-rose-500"
                            onClick={Delete}
                        >
                            <FaTrash />
                        </button>
                        :
                        <button
                            onClick={AddToCart}
                            className="btn--add text-white bg-emerald-600 " >
                            <FaCartPlus />
                        </button>
                }
                {
                    OrderNumber > 0 ?
                        <>
                            <button
                                onClick={incrase}
                                className="btn--add">
                                <FiPlus />
                            </button>
                            <span > {OrderNumber} </span>

                            <button
                                onClick={Decerment}

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