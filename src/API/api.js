import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";


const api = async() => {
    const respond = await axios.get(`${BASE_URL}/products`);
    return respond.data;
}
export {api};