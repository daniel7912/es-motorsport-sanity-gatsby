import React from "react"
import Img from "gatsby-image"
import { v4 } from "uuid"
import PortableText from "../portableText"
import { MenuAbsoluteItem, MenuReferencedItem } from "../Menu/Menu"

import "./Card.css"

const Card = ({ contents, rawPageBuilder }) => {
  return (
    <div className="card">
      <Img fluid={contents.image.asset.fluid} alt={contents.image.alt} />
      <div className="card-text">
        <h3>{contents.title}</h3>
        <PortableText blocks={rawPageBuilder.body} />
        {rawPageBuilder.link.map(item => (
          <div className="card-buttons" key={v4()}>
            {item._type === "menuAbsoluteItem" && (
              <MenuAbsoluteItem
                item={item}
                type="button"
                classes="button primary large"
              />
            )}
            {item._type !== "menuAbsoluteItem" && (
              <MenuReferencedItem
                item={item.referencedItem}
                type="button"
                classes="button primary large"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
