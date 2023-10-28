const initialState = {
    loading:false,
    products:[],
    error:""
}

const productReducer = (state=initialState,action) => {
    switch(action.type){
        case "FETCH-PRODUCTS":
            return{
                ...state,
                loading:true,
            }
        case "FETCH-PRODUCTS-SUCCESS":
            return {
                ...state,
                loading:false,
                products:action.payload,
            }  
        case "FETCH-PRODUCTS-FAILURE":
            return {
                ...state,
                loading:false,
                products:[],
                error:action.payload,
            }  
        default: return state;      
    }
}

export default productReducer;