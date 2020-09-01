import React from "react"
import MenuItem from "../menu-item/MenuItem"
import "./Directory.scss"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import {selectDirectorySections} from "../../Redux/directory/directory.selector"
const Directory =({sections})=> {

  
    return (
      <div className="directory-menu">
        {sections.map((section) => {
          return (
            <MenuItem
              key={section.id}
              title={section.title}
              img={section.imageUrl}
              size={section.size}
              linkUrl={section.linkUrl}
            />
          )
        })}
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
})
export default connect(mapStateToProps) (Directory)
