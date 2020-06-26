import React from "react"
import "./CartIcon.scss"
import {ReactComponent as Shoppingbag} from "./../../assets/shopping-bag.svg"
import {connect} from "react-redux"
import {toggleCartHidden} from "../../Redux/cart/cart.actions"

const CartIcon=({toggleCartHidden})=>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Shoppingbag className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToProps) (CartIcon)
