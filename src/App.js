import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

// context
import ApiContext from "./Context/ApiContext";
import Cartcontext from "./Context/Cartcontext";

// Components
import Shop from "./Components/Shop";
import Productdetails from "./Components/Productdetails";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <ApiContext>
      <Cartcontext>
        <Navbar />
        <Routes>
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id" element={<Productdetails />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </Cartcontext>
    </ApiContext>
  );
};

export default App;
