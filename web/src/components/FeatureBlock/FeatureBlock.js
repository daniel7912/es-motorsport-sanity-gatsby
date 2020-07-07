import React from "react"
import { Link } from "gatsby"
import PortableText from "../portableText"

import "./FeatureBlock.css"

const FeatureBlock = ({ contents, rawPageBuilder }) => {
  return (
    <div
      className={`feature-block flex ${
        contents.layout === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className="block-image w-1/2"
        style={{ backgroundImage: `url(${rawPageBuilder.image.asset.url}` }}
      ></div>
      <div className="block-text w-1/2">
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
    </div>
  )
}

export default FeatureBlock
