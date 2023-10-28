import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import Shop from "./Components/Shop";
import Productdetails from "./Components/Productdetails";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id" element={<Productdetails />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
    </Provider>
  );
};

export default App;
