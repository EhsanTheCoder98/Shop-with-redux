import React  from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import cartSvg from "../svg/shop.svg";



// redux
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Navbar = () => {
    const state = useSelector(state=>state.cartDetails)
    return (
        <div className={styles.container}>
            <Link to="/products">Products</Link>
            <div>
            <Link to="/Cart"><img src={cartSvg}/></Link>
            <span>{state.itemsCounter}</span>          
            </div>
        </div>
    );
};

export default Navbar;