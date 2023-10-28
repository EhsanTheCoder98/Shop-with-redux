import React , {useContext} from 'react';
import styles from "./CartContents.module.css";

// Context
import { CartContextPro } from '../Context/Cartcontext';
// Helpers
import { quantityCount } from '../Helpers/functions';

const CartContents = ({product}) => {
    const {state,dispatch} = useContext(CartContextPro);
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
            <img src={product.image}/>
            <div className={styles.buttonContainer}>
            <button onClick={()=>dispatch({type:"Increase",payload:product})} style={{width:"30px",height:"30px"}}>+</button>
            {
                quantityCount(state,product.id) === 1 &&
                <button onClick={()=>dispatch({type:"Remove",payload:product})} style={{width:"30px",height:"30px"}}>R</button>
            }
            {
                quantityCount(state,product.id) > 1 &&
                <button onClick={()=>dispatch({type:"Decrease",payload:product})} style={{width:"30px",height:"30px"}}>-</button>
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