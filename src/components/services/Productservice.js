import http from "./httpservice";

const getProductMenuApi = async () => {
  const response = await http.get("/menu");
  return response.data.data || []; 
};

export default getProductMenuApi;