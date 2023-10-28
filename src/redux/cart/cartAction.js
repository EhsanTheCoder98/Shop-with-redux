const addItem = (product) => {
    return {
        type:"Add_Item",
        payload:product
    }
}
const increase = (product) => {
    return {
        type:"Increase",
        payload:product
    }
}
const decrease = (product) => {
    return {
        type:"Decrease",
        payload:product
    }
}
const remove = (product) => {
    return {
        type:"Remove",
        payload:product
    }
}
const checkout = () => {
    return {
        type:"checkout"
    }
}

export {increase,decrease,remove,addItem,checkout};