import React from 'react';
import styles from "./CartContents.module.css";


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
                <button onClick={()=>dispatch(remove(product))} style={{width:"30px",height:"30px"}}>R</button>
            }
            {
                quantityCount(state,product.id) > 1 &&
                <button onClick={()=>dispatch(decrease(product))} style={{width:"30px",height:"30px"}}>-</button>
            }
            </div>
            </div>
            <div className={styles.rightContainer}>
            <p>{product.description}</p>
            <span>Category:{product.category}</span>
            <span>Price:{product.price}$</span>
            <span>you chose {product.quantity} of this product</span>
            </div>
        </div>
    );
};

export default CartContents;