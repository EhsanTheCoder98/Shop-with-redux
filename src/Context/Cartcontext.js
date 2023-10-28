import React , {createContext, useReducer} from 'react';

const initialState = {
    selectedItems : [] ,
    itemsCounter : 0,
    totalPrice: 0,
    checkout:false,
}

const sumItems = (item) => {
    const itemsCounter = item.reduce((total,product)=>total+ product.quantity,0);
    const totalPrice = item.reduce((total,product)=>total + product.price*product.quantity,0).toFixed(2);
    return{itemsCounter,totalPrice}
}

const reducer = (state,action) => {
    console.log(state.selectedItems)
    switch(action.type){
        case "Add_Item":
           if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload ,
                    quantity:1
                })
           }
           return{
            ...state,
            selectedItems:[...state.selectedItems],
            ...sumItems(state.selectedItems),
            checkout:false,
           }
        case"Increase":
           const indexI = state.selectedItems.findIndex(
            item => item.id === action.payload.id
           )
           state.selectedItems[indexI].quantity++
           return{
            ...state,
            ...sumItems(state.selectedItems),
            checkout:false,
           }
        case"Decrease":
            const indexD = state.selectedItems.findIndex(
                item => item.id === action.payload.id
            )
            state.selectedItems[indexD].quantity--
            return{
                ...state,
            ...sumItems(state.selectedItems),
            checkout:false,
            }
        case"Remove":
            const newSelected = state.selectedItems.filter(item => item.id !== action.payload.id);
            state.selectedItems = [...newSelected];
            return{
                ...state,
            ...sumItems(state.selectedItems),
            checkout:false,
            }
        case"checkout":
        return{
            ...state.selectedItems = {
                selectedItems : [] ,
                itemsCounter : 0,
                totalPrice: 0,
                checkout:true,
            }  
        }  
        default:
            return state;
    }
}

export const CartContextPro = createContext();

const Cartcontext = (props) => {

    const [state , dispatch] = useReducer(reducer,initialState);
    return (
        <CartContextPro.Provider value={{state,dispatch}}>
            {props.children}
        </CartContextPro.Provider>
    );
};

export default Cartcontext;