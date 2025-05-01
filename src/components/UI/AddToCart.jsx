import React from 'react'

function AddToCart() {
    return (
        <div className="my-auto space-y-5">
            <button className="btn px-10"> Add to Cart </button>


            <div className=" space-x-3 mx-10">
                <button className="text-3xl font-light " > + </button>
                <span className="text-lg border p-1 rounded-md" > 12 </span>
                <button className="text-4xl font-light" > - </button>
            </div>


        </div>
    )
}

export default AddToCart