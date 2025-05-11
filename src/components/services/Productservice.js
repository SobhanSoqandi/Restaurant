import axios from "axios";


 export const getProductMenu = async () => {
    return await axios.get("https://react-fast-pizza-api.jonas.io/api/menu").then(({ data }) => data.data);
  }
