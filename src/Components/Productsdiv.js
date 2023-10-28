import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Productsdiv.module.css";
import svg from "../svg/trash.svg"


// Helpers
import { isInCart, quantityCount, shorten } from '../Helpers/functions';


// redux
import { useDispatch , useSelector } from 'react-redux';
import { increase,decrease,remove,addItem } from '../redux/cart/cartAction';

const Productsdiv = ({data}) => {
    const state = useSelector(state=>state.cartDetails);
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <img src={data.image} alt='product' className={styles.image}/>
            <h2>{shorten(data.title)}</h2>
            <Link   to={`/products/${data.id}`}>Details</Link>
            <span>Price:{data.price}$</span>
            <div className={styles.buttonContainer}>
                {
                    isInCart(state,data.id)?
                        <button onClick={()=>dispatch(increase(data))} style={{width:"30px"}}>+</button>:
                        <button onClick={()=>dispatch(addItem(data))}>Add To Cart</button>
                }
                {
                    quantityCount(state,data.id) > 0 && <div    className={styles.spanContainer}><sapn>{quantityCount(state,data.id)}</sapn></div>
                }
                {
                    quantityCount(state,data.id) === 1 &&
                    <button onClick={()=>dispatch(remove(data))} style={{width:"30px"}}><img src={svg} style={{width:"15px"}}/></button>
                }
                {
                     quantityCount(state,data.id) > 1 &&
                     <button onClick={()=>dispatch(decrease(data))} style={{width:"30px"}}>-</button>
                }
            </div>
        </div>
    );
};

export default Productsdiv;