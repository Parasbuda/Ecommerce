import React from "react"
import "./CollectionItem.scss"
import CustomButton from "../custom-button/CustomButton"
import {connect} from "react-redux"
import {addItem} from "../../Redux/cart/cart.actions"

const CollectionItem=({item,addItem})=>{
    const {name,price,imageUrl}=item
    return(
<div className="collection-item">
    <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
    <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    <CustomButton onClick={()=>addItem(item)} inverted>Add to cart</CustomButton>
</div>
    )
}

const matchDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})
export default connect(null,matchDispatchToProps) (CollectionItem)