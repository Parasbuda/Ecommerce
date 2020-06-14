import React, { Component } from 'react'
import Shop_Data from './Shop_Data'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'

export default class Shop extends Component {
    state={
        collections:Shop_Data
    }
    render() {
        return (
            <div className="shoppage">
                {
                    this.state.collections.map(collection=>{
                        return(
                            <PreviewCollection key={collection.id} items={collection.items}
                            title={collection.title}/>
                        )
                    })
                }
             
            </div>
        )
    }
}
