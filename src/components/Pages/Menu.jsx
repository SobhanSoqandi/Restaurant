
import { useState, useEffect } from 'react';
import MenuList from '../featurs/Menu/MenuList';
import Header from '../UI/Header';
import http from '../services/httpservice';
import { toast } from 'react-toastify';


function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await http.get("/menu");

        setMenuItems(response.data.data || []);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMenu();
  }, []);

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