import axios from "axios";

const fetchProducts = () => {
  return {
    type: "FETCH-PRODUCTS",
  };
};
const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH-PRODUCTS-SUCCESS",
    payload: products,
  };
};
const fetchProductsFailure = (error) => {
  return {
    type: "FETCH-PRODUCTS-FAILURE",
    payload: error,
  };
};

export const fetchApi = () => {
  return (dispatch) => {
    dispatch(fetchProducts());
    axios
      .get("https://fakestoreapi.com/products")
      .then((respond) => {
        const data = respond.data;
        dispatch(fetchProductsSuccess(data));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchProductsFailure(errMsg));
      });
  };
};
