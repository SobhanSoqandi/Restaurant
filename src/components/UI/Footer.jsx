import React from 'react'
import { GoChevronRight } from 'react-icons/go'
import { useSelector } from 'react-redux';
import { getNumber, getPrice } from '../featurs/cart/CartSlice';
import { useNavigate } from 'react-router-dom';

function Footer() {

    const pizzaNumber = useSelector(getNumber);

    const Price = useSelector(getPrice);

    const navigate = useNavigate();


    return (
        <div className="bg-black text-white flex justify-around p-5 items-center fixed w-full bottom-0 ">
            <div className="font-bold flex gap-5">
                <span> {pizzaNumber}</span>
                <span> {Price} $</span>
            </div>
            <div
                onClick={() => navigate('/layout/cart')}
                className="font-bold flex items-center hover:cursor-pointer group">
                <h2> Open Caart </h2>
                <GoChevronRight className="fill-white text-[20px] " />
            </div>
        </div>
    )
}

export default Footer