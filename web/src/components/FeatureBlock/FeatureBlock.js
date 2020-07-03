import React from "react"
import { Link } from "gatsby"
import PortableText from "../portableText"

import "./FeatureBlock.css"

const FeatureBlock = ({ contents, rawPageBuilder }) => {
  return (
    <div className="feature-block grid grid-cols-2">
      {contents.layout === "left" && (
        <div
          className="block-image"
          style={{ backgroundImage: `url(${rawPageBuilder.image.asset.url}` }}
        ></div>
      )}
      <div className="block-text">
        <div>
          <PortableText blocks={rawPageBuilder.body} />
          <Link
            to={rawPageBuilder.link.url}
            className="button secondary medium"
          >
            <span>{rawPageBuilder.link.label}</span>
          </Link>
        </div>
      </div>
      {contents.layout === "right" && (
        <div
          className="block-image"
          style={{ backgroundImage: `url(${rawPageBuilder.image.asset.url}` }}
        ></div>
      )}
    </div>
  )
}

export default FeatureBlock
