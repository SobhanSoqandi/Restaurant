
import { useState, useEffect } from 'react';
import MenuList from '../featurs/Menu/MenuList';
import Header from '../UI/Header';
import http from '../services/httpservice';
import { toast } from 'react-toastify';
import useProductMenu from '../services/useProductMenu';


function Menu() {


  const {isLoading , menuItems , isError , error} = useProductMenu();


  if(isError) {
    return toast.error(error)
  }


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div >
      <Header />

      <div className="container mx-auto" >

        <MenuList
          key={menuItems.id}
          Products={menuItems}
        />
      </div>


      {
        console.log(menuItems)
      }


    </div>
  );
}

export default Menu;