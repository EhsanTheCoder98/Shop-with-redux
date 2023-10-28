import React , {useEffect} from "react";
import styles from "./Shop.module.css";
import spinner from "../gif/Double Ring-5.6s-370px.gif"



// redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchApi } from "../redux/products/productsAction";


// Components
import Productsdiv from "./Productsdiv";

const Shop = () => {
  const product = useSelector(state => state.productContainer);
  const dispatch = useDispatch()
  useEffect(()=>{
      if(!product.products.length) dispatch(fetchApi())
  },[])
  return (
    <div className={styles.container}>
        
        {product.loading ? <img src={spinner} /> :
          product.error ? <h1>There is a problem</h1> :
          product.products.map(item => <Productsdiv key={item.id} data={item} />)
        }
        
    </div>
  );
};

export default Shop;
