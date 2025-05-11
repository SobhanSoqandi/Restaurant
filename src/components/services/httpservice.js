import axios from "axios";


const BASE_URL = "https://react-fast-pizza-api.jonas.io/api";

const app = axios.create(
    {
        baseURL: BASE_URL,
        withCredentials: false,
    });

    const http = {
        get : app.get,
        post : app.post , 
        delete : app.delete ,
        put : app.put , 
        patch : app.patch ,
    };

    export default http;