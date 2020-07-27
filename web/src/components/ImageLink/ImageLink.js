import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { getItemLink, MenuAbsoluteItem } from "../Menu/Menu"

import "./ImageLink.css"

const ImageLinkContents = ({ contents }) => {
  const ImageHoverDiv = styled.div`
    &:before {
      content: '${contents.title}';
    }
  `
  return (
    <>
      <Img fluid={contents.image.asset.fluid} alt={contents.image.alt} />
      <h4>{contents.title}</h4>
      <ImageHoverDiv className="image-hover"></ImageHoverDiv>
    </>
  )
}

const ImageLink = ({ contents, rawPageBuilder }) => (
  <div className="image-link relative text-center">
    {rawPageBuilder.link[0]._type === "menuReferencedItem" && (
      <Link to={getItemLink(rawPageBuilder.link[0].referencedItem)}>
        <ImageLinkContents contents={contents} />
      </Link>
    )}
    {rawPageBuilder.link[0]._type === "menuAbsoluteItem" && (
      <MenuAbsoluteItem item={rawPageBuilder.link[0]}>
        <ImageLinkContents contents={contents} />
      </MenuAbsoluteItem>
    )}
  </div>
)

export default ImageLink
