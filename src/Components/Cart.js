import React , {useContext} from 'react';
import styles from "./Cart.module.css";

// components
import CartContents from './CartContents';
// Context
import { CartContextPro } from '../Context/Cartcontext';


const Cart = () => {
    const {state,dispatch} = useContext(CartContextPro);
    return (
        <div>
            {state.selectedItems.map(item => <CartContents key={item.id} product={item}/> )}
            {
                state.checkout ? <h3>Checkedout Successfully!</h3>
                : 
                <div className={styles.container}>
                <span>Your Total Price Is: {state.totalPrice}$</span>
                <button onClick={()=>dispatch({type:"checkout"})}>Wanna checkout?</button>
            </div>
            }
        </div>
    );
};

export default Cart;