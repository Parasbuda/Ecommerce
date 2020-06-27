import React from "react"
import "./CartIcon.scss"
import {ReactComponent as Shoppingbag} from "./../../assets/shopping-bag.svg"
import {connect} from "react-redux"
import {toggleCartHidden} from "../../Redux/cart/cart.actions"
import {selectCartItemsCount} from "../../Redux/cart/cart.selector"
import {createStructuredSelector} from "reselect"


const CartIcon=({toggleCartHidden,itemCount})=>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Shoppingbag className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps=createStructuredSelector({
    itemCount:selectCartItemsCount
})
export default connect(mapStateToProps,mapDispatchToProps) (CartIcon)
