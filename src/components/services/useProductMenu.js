import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import getProductMenuApi from "./Productservice";


const useProductMenu = () => {
  const { data: menuItems, isLoading, isError, error } = useQuery({
    queryKey: ["menuItems"],  
    queryFn: getProductMenuApi,      
    onError: (err) => {
      toast.error(err.message);  
    },   
  });

  return { menuItems, isLoading, isError, error };
};

export default useProductMenu;
