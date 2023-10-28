import React from 'react';
import styles from "./CartContents.module.css";
import svg from "../svg/trash.svg"


// redux
import { useDispatch , useSelector } from 'react-redux';
import {remove,increase,decrease} from "../redux/cart/cartAction"

// Helpers
import { quantityCount } from '../Helpers/functions';

const CartContents = ({product}) => {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.cartDetails)
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
            <img src={product.image} alt='product'/>
            <div className={styles.buttonContainer}>
            <button onClick={()=>dispatch(increase(product))} style={{width:"30px",height:"30px"}}>+</button>
            {
                quantityCount(state,product.id) === 1 &&
                <button onClick={()=>dispatch(remove(product))} style={{width:"30px",height:"30px"}}><img src={svg} style={{width:"15px", height:"10px"}}/></button>
            }
            {
                quantityCount(state,product.id) > 1 &&
                <button onClick={()=>dispatch(decrease(product))} style={{width:"30px",height:"30px"}}>-</button>
            }
            </div>
            </div>
            <div className={styles.rightContainer}>
            <p>{product.description}</p>
            <div className={styles.dynamicData}>
            <p>Category:<span>{product.category}</span></p>
            <p>Price:<span>{product.price}$</span></p>
            <p>bought <span>{product.quantity}</span> of this product</p>
            </div>
            </div>
        </div>
    );
};

export default CartContents;