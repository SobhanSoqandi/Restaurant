import React from 'react'

function Register() {
    return (
        <div className="container mt-10 mx-auto" >
            <div className="text-center" >
                <h1 className=" font-bold text-3xl" > The Best Pizza </h1>
                <h2 className="font-bold text-2xl text-red-600" > Straight out of oven , Straight to you </h2>
                <p className="font-bold" > Welocome please start width telling your name </p>
                <input className="shadow-lg mt-8 appearance-none border-2 border-gray-200 rounded-2xl py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-600 placeholder:font-bold " type="text" placeholder="your full name" />
            </div>
        </div>
    )
}

export default Register;