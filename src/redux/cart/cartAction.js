const addItem = () => {
    return {
        type:"Add-Item"
    }
}
const increase = () => {
    return {
        type:"Increase"
    }
}
const decrease = () => {
    return {
        type:"Decrease"
    }
}
const remove = () => {
    return {
        type:"Remove"
    }
}
const checkout = () => {
    return {
        type:"checkout"
    }
}

export {increase,decrease,remove,addItem,checkout};