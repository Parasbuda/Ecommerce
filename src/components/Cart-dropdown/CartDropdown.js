import React from "react"
import "./CartDropdown.scss"
import CustomButton from "../custom-button/CustomButton"
import CartItem from "../cart-item/CartItem"
import {connect} from "react-redux"
import { selectCartItems } from "../../Redux/cart/cart.selector"
import {createStructuredSelector} from "reselect"

const CartDropdown=({cartItems})=>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
               {
                   cartItems.map(cartItem=>{
                    return(
                       <CartItem key={cartItem.id} item={cartItem}/>
                    )
                    })
               }
                </div>
            <CustomButton>GO TO CHECKOUT </CustomButton>
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})

export default connect(mapStateToProps) (CartDropdown)