import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

// Context
import { CartContextPro } from '../Context/Cartcontext';


const Navbar = () => {
    const {state} = useContext(CartContextPro);
    return (
        <div className={styles.container}>
            <Link to="/products">Products</Link>
            <div>
            <Link to="/Cart">Cart</Link>
            <span>{state.itemsCounter}</span>          
            </div>
        </div>
    );
};

export default Navbar;