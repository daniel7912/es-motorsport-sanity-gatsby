import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { v4 } from "uuid"
import PortableText from "../portableText"
import Menu, { MenuAbsoluteItem, MenuReferencedItem } from "../Menu/Menu"

import "./Card.css"

const Card = ({ contents, rawPageBuilder, type = "pageBuilder" }) => {
  if (type === "vehicle") {
    return (
      <div className="card flex flex-col">
        <div className="image-wrapper">
          <Link to={"/vehicles-for-sale/" + contents.slug.current}>
            <Img
              fluid={contents.mainImage.asset.fluid}
              alt={contents.mainImage.alt}
            />
          </Link>
        </div>
        <div className="card-text flex-1 flex flex-col">
          <Link to={"/vehicles-for-sale/" + contents.slug.current}>
            <h3 className="font-semibold text-xl mb-2">{contents.title}</h3>
          </Link>
          <p className="font-semibold text-xl mb-4 text-primary">
            {contents.price}
          </p>
          {/* <PortableText blocks={rawPageBuilder.body} /> */}
          <div className="card-buttons flex-1 flex content-end flex-wrap">
            <Link
              to={"/vehicles-for-sale/" + contents.slug.current}
              className="button medium primary mx-auto"
            >
              <span>Find out more</span>
            </Link>
          </div>
        </div>
      </div>
    )
  } else {
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
          <h3 className="font-semibold text-2xl mb-4">{contents.title}</h3>
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
                >
                  <span>{item.title}</span>
                </MenuAbsoluteItem>
              )}
              {item._type !== "menuAbsoluteItem" && (
                <MenuReferencedItem
                  item={item.referencedItem}
                  classes="button mx-auto primary large"
                >
                  {item.label && <span>{item.label}</span>}
                  {!item.label && <span>{item.referencedItem.title}</span>}
                </MenuReferencedItem>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Card
