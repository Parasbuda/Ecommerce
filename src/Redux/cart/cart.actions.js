import {cartActionTypes} from "./cart.types"
export const toggleCartHidden=()=>({
    type:cartActionTypes.TOGGLE_CART_HIDDEN,
    //payload:here payload is not needed because its just the hidden or seen.
})

export const addItem=(item)=>({
    type:cartActionTypes.ADD_ITEM,
    payload:item
})