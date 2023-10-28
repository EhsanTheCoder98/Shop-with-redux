import { combineReducers } from "redux";
import productReducer from "./products/productsReducer";

const rootReducer = combineReducers(()=> {
    productContainer = productReducer
})

export default rootReducer;