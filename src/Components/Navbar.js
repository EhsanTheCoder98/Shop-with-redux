import React  from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";



// redux
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Navbar = () => {
    const state = useSelector(state=>state.cartDetails)
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