import React from 'react'
import AddToCart from './AddToCart'

function FoodMenu() {
    return (
        <div className="container mx-auto space-y-20 overflow-y-auto h-[750px]" >
            <div className="p-5 flex shadow-xl ">
                <img src="img/food2.avif" className="w-32 h-32 rounded-md" alt="" />
                <div className="font-bold px-5 m-2 flex justify-between w-full" >
                    <div >
                        <h1 className=""> Title </h1>
                        <p> peperony , andilase , capitalling </p>
                        <p className="mt-10" > $16 </p>
                    </div>
                    <AddToCart />
                </div>
            </div>

            <div className="p-5 flex shadow-xl ">
                <img src="img/food4.jpg" className="w-32 h-32 rounded-md" alt="" />
                <div className="font-bold px-5 m-2 flex justify-between w-full" >
                    <div >
                        <h1 className=""> Title </h1>
                        <p> peperony , andilase , capitalling </p>
                        <p className="mt-10" > $16 </p>
                    </div>
                    <AddToCart />
                </div>
            </div>

            <div className="p-5 flex shadow-xl ">
                <img src="img/food3.avif" className="w-32 h-32 rounded-md" alt="" />
                <div className="font-bold px-5 m-2 flex justify-between w-full" >
                    <div >
                        <h1 className=""> Title </h1>
                        <p> peperony , andilase , capitalling </p>
                        <p className="mt-10" > $16 </p>
                    </div>
                    <AddToCart />
                </div>
            </div>

            <div className="p-5 flex shadow-xl ">
                <img src="img/food2.avif" className="w-32 h-32 rounded-md" alt="" />
                <div className="font-bold px-5 m-2 flex justify-between w-full" >
                    <div >
                        <h1 className=""> Title </h1>
                        <p> peperony , andilase , capitalling </p>
                        <p className="mt-10" > $16 </p>
                    </div>
                    <AddToCart />
                </div>
            </div>
        </div>
    )
}

export default FoodMenu