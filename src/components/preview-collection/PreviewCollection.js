import React from "react"
import "./PreviewCollection.scss"
import CollectionItem from "../collection-item/CollectionItem"
const PreviewCollection=({title,items})=>{
    return(
        <div className="collection-preview">
            <div className="title">{title.toUpperCase()}</div>
            <div className="preview">
            {
                items.filter((item,i)=>i<4).map(item=>{
                    return(
                        <CollectionItem key={item.id} name={item.name} price={item.price}
                        imageUrl={item.imageUrl} id={item.id} />
                    )
                })
            }
            </div>

        </div>
    )
}
export default PreviewCollection