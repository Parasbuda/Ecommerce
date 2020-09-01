import React from "react"
import "./CollectionOverview.scss"
import PreviewCollection from "../../components/preview-collection/PreviewCollection"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectShopCollections } from "../../Redux/shop/shop.selectors"
const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map((collection) => {
        return (
          <PreviewCollection
            key={collection.id}
            items={collection.items}
            title={collection.title}
          />
        )
      })}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections,
  })
export default connect(mapStateToProps) (CollectionOverview)
