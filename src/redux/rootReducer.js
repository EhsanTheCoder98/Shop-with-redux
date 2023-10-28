import { combineReducers } from "redux";
import productReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    productContainer : productReducer,
    cartDetails:cartReducer,
})

export default rootReducer;