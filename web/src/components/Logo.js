import React from "react"
import { imageUrlFor } from "../lib/image-url"
import { buildImageObj } from "../lib/helpers"
import "./logo.css"

const Logo = ({ image, addPadding }) => {
  const logoImage =
    image && image.asset
      ? imageUrlFor(buildImageObj(image)).width(200).url()
      : ""
  return (
    <div
      className={
        addPadding
          ? `logo mx-auto lg:mx-0 py-4 px-4 bg-white mb-4`
          : `logo py-4`
      }
    >
      <img src={logoImage} alt={image.alt} />
      {/* <span className="text-secondary">ES</span>Motorsport */}
    </div>
  )
}

export default Logo
