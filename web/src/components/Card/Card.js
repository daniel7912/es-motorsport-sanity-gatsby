import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PortableText from "../portableText"

import "./Card.css"

const Card = ({ contents, rawPageBuilder }) => {
  return (
    <div className="card">
      <Img fluid={contents.image.asset.fluid} alt={contents.image.alt} />
      <div className="card-text">
        <h3>{contents.title}</h3>
        <PortableText blocks={rawPageBuilder.body} />
        <Link to={rawPageBuilder.link.url} className="button primary medium">
          <span>{rawPageBuilder.link.label}</span>
        </Link>
      </div>
    </div>
  )
}

export default Card
