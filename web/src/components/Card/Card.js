import React from "react"
import Img from "gatsby-image"
import { v4 } from "uuid"
import PortableText from "../portableText"
import Menu, { MenuAbsoluteItem, MenuReferencedItem } from "../Menu/Menu"

import "./Card.css"

const Card = ({ contents, rawPageBuilder }) => {
  return (
    <div className="card flex flex-col">
      <div className="image-wrapper">
        <Img fluid={contents.image.asset.fluid} alt={contents.image.alt} />
        {rawPageBuilder.imageLinks && (
          <div className="image-menu-wrapper">
            <Menu rawItems={rawPageBuilder.imageLinks} />
          </div>
        )}
      </div>
      <div className="card-text flex-1 flex flex-col">
        <h3>{contents.title}</h3>
        <PortableText blocks={rawPageBuilder.body} />
        {rawPageBuilder.link.map(item => (
          <div
            className="card-buttons flex-1 flex content-end flex-wrap"
            key={v4()}
          >
            {item._type === "menuAbsoluteItem" && (
              <MenuAbsoluteItem
                item={item}
                type="button"
                classes="button mx-auto primary large"
              />
            )}
            {item._type !== "menuAbsoluteItem" && (
              <MenuReferencedItem
                item={item.referencedItem}
                type="button"
                classes="button mx-auto primary large"
                label={item.label}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
