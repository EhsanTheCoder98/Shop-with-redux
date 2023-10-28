import React, { useContext } from "react";
import styles from "./Shop.module.css";

// Context
import { Context } from "../Context/ApiContext";
// Components
import Productsdiv from "./Productsdiv";

const Shop = () => {
  const product = useContext(Context);
  return (
    <div className={styles.container}>
        
        {product.map(item => <Productsdiv key={item.id} data={item} />)}
        
    </div>
  );
};

export default Shop;
