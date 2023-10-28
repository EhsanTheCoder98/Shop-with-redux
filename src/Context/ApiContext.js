import React , {useState ,useEffect, createContext} from 'react';

// API
import { api } from '../API/api';

export const Context = createContext();

const ApiContext = (props) => {
    
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        const fetchApi = async() => {
            setProduct(await api())
        }
        fetchApi()
    },[])
    
    return (
        <Context.Provider   value={product}>
            {props.children}
        </Context.Provider>
            
        
    );
};

export default ApiContext;