import React from 'react'
import Input from '../../UI/Input'
import Header from '../../UI/Header'

function OrderInfo() {
    return (
        <>
            <div className="max-w-md m-auto shadow-lg rounded-lg mt-20" >
                <div className="p-5" >
                    <h1 className="font-bold text-xl md:text-3xl py-10" > Ready to order ? Lets go </h1>
                    <form >
                        <Input label="First Name" type="text" />
                        <Input label="phone" type="text" />
                        <Input label="Adress" type="text" />
                        <button className="btn md:w-full w-full " >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default OrderInfo