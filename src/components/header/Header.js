import React from "react"
import "./Header.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {auth} from "../../Firebase/Firebase"
import {connect} from "react-redux"
import CartIcon from "../Cart-icon/CartIcon"
import CartDropdown from "../Cart-dropdown/CartDropdown"
import {createStructuredSelector} from "reselect"
import {selectCartHidden} from "../../Redux/cart/cart.selector"
import {selectCurrentUser} from "../../Redux/user/user.selector"
import { setCurrentUser } from "../../Redux/user/user.actions"
const Header=({currentUser,hidden})=>{
    return(
        <div className="header">
            <Link to="/" className="logo-container  ">
                <Logo className="logo"/>
                </Link>
                <div className="options">
                    <Link className="option" to="/shop">SHOP</Link>
                    <Link className="option" to="/contact">CONTACT</Link>
                    <Link className="option" to="/about">ABOUT</Link>
                    {
                        currentUser?
                        <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>:
                        <Link className="option" to="/signin">SIGNIN</Link>
                    }
                    <CartIcon/>
                </div>
                {
                   hidden ? null:<CartDropdown/>
                }
               
        </div>
    )
}

const mapsStateToProps=createStructuredSelector({
    currentUser:setCurrentUser,
    hidden:selectCartHidden
})
export default connect(mapsStateToProps)(Header) 