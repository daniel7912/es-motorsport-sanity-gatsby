import React from "react"
import Figure from "./Figure"
import Carousel from "./Carousel/Carousel"

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
  },
}

export default serializers
