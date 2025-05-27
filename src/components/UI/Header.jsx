
import { BiSearch } from 'react-icons/bi'
import { GiFullPizza } from 'react-icons/gi'
import Input from './Input'
import { useSelector } from 'react-redux';

function Header() {


    const name = useSelector((state) => state.AuthSlice.name);


    return (
        <header className="bg-red-500 container mx-auto " >
            <div className="container mx-auto flex p-2" >

                <GiFullPizza className="w-16 h-16 mx-2 text-white " />
                <h1 className="text-white text-xl my-auto" > fast React Pizza </h1>
                <form class="max-w-sm ml-auto mr-5">
                    <div class="relative mt-2">
                        <button class="absolute inset-y-0 start-0 flex items-center ps-3 text-green-700 pointer-events-none">
                            <BiSearch />
                        </button>
                        <input
                            class="block w-full p-2 ps-10 text-sm appearance-none border-2 border-gray-200 rounded-xl py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-600"
                            placeholder="Search your food"
                        />
                        {/* <Input 
                        type="search"
                        placeholder="Search Your food"
                        /> */}
                    </div>                    
                </form>
                    <div className="mt-4" >  {name}  </div>
            </div>
        </header>
    )
}

export default Header