import React ,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Productdetail.module.css";

// Context
import { Context } from '../Context/ApiContext';
// Helpers
import { shorten } from '../Helpers/functions';


const Productdetails = () => {
    const params = useParams();
    const product =useContext(Context);
    const data = product[params.id-1];
    const {image,title,description,category,price} = data;
    return (
        <div className={styles.container}>
            <img src={image}/>
            <div className={styles.rightdiv}>
                <h1>{shorten(title)}</h1>
                <span>Category : {category}</span>
                <p>{description}</p>
                <span>Price:{price}$</span>
            </div>
        </div>
    );
};

export default Productdetails;