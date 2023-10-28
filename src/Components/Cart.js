import React from 'react';
import styles from "./Cart.module.css";

// components
import CartContents from './CartContents';

// redux
import { useDispatch , useSelector } from 'react-redux';
import {checkout} from "../redux/cart/cartAction"


const Cart = () => {
    const state = useSelector(state=>state.cartDetails);
    const dispatch = useDispatch()
    return (
        <div>
            {state.selectedItems.map(item => <CartContents key={item.id} product={item}/> )}
            {
                state.checkout ? <h3>Checkedout Successfully!</h3>
                : 
                <div className={styles.container}>
                <span>Your Total Price Is: {state.totalPrice}$</span>
                <button onClick={()=>dispatch(checkout())}>Wanna checkout?</button>
            </div>
            }
        </div>
    );
};

export default Cart;