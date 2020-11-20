import React from "react"
import { imageUrlFor } from "../lib/image-url"
import { buildImageObj } from "../lib/helpers"

const Logo = ({ image, addPadding }) => {
  console.log(image)
  const logoImage =
    image && image.asset
      ? imageUrlFor(buildImageObj(image)).width(200).url()
      : ""
  console.log(logoImage)
  return (
    <div className={addPadding ? `py-4 px-4 bg-white mb-4` : `py-4`}>
      <img src={logoImage} alt={image.alt} />
      {/* <span className="text-secondary">ES</span>Motorsport */}
    </div>
  )
}

export default Logo
