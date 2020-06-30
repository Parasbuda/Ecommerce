import React from "react"
import "./CartDropdown.scss"
import CustomButton from "../custom-button/CustomButton"
import CartItem from "../cart-item/CartItem"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import { selectCartItems } from "../../Redux/cart/cart.selector"
import {toggleCartHidden} from "../../Redux/cart/cart.actions"
import {createStructuredSelector} from "reselect"

const CartDropdown=({cartItems,history,dispatch})=>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
               { cartItems.length?
                   (cartItems.map(cartItem=>{
                    return(
                       <CartItem key={cartItem.id} item={cartItem}/>
                    )
                    })):(
                    <span className="empty-message">Your Cart is Empty!!!</span>
                    )
               }
                </div>
            <CustomButton onClick={()=>{history.push("/checkout")
        dispatch(toggleCartHidden())}}>GO TO CHECKOUT </CustomButton>
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps) (CartDropdown))