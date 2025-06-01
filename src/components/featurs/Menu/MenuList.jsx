import AddToCart from '../../UI/AddToCart'
import Footer from '../../UI/Footer'


function MenuList({ Products }) {
    return (
        <>
            <div >
                {
                    Products.map((item) => (
                        <div className="flex justify-between border-b" >

                            <div className="p-4" >
                                <img className="w-44 h-40 rounded-xl" src={item.imageUrl} alt={item.name} />
                                <AddToCart
                                item={item}
                                id={item.id}
                                Length={item.ingredients.length} />
                            </div>

                            <div className="flex-1 space-y-10 font-bold p-5" >
                                <h6> {item.name} </h6>
                                <h6> {
                                    item.ingredients.map((ingredient) => (
                                        <span className="object--style" >{ingredient}</span>
                                    ))
                                }
                                </h6>
                                <h6> ${item.unitPrice} </h6>
                            </div>
                        </div>
                    ))
                }

            </div>
            <Footer />

        </>


    )
}

export default MenuList