import React from "react"
import { Link } from "gatsby"
import PortableText from "../portableText"

import "./FeatureBlock.css"

const FeatureBlock = ({ contents, rawPageBuilder }) => {
  console.log(contents)
  return (
    <div
      className={`feature-block flex ${
        contents.layout === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className="block-image lg:w-1/2"
        style={{ backgroundImage: `url(${contents.image.asset.fluid.src}` }}
      ></div>
      <div className="block-text lg:w-1/2">
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
