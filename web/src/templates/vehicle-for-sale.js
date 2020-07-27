import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ImageGallery from "../components/ImageGallery/ImageGallery"
import PortableText from "../components/portableText"
import Layout from "../containers/layout"
import { imageUrlFor } from "../lib/image-url"

export const query = graphql`
  query VehicleForSaleTemplateQuery($id: String!) {
    vehicle: sanityVehiclesForSale(id: { eq: $id }) {
      id
      publishedAt
      mainImage {
        ...SanityImage
        alt
      }
      imageGallery {
        alt
        ...SanityImage
      }
      price
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

const VehicleForSaleTemplate = props => {
  const { data, errors } = props
  console.log(data)
  const vehicle = data && data.vehicle
  console.log(vehicle)
  vehicle.imageGallery.map(i => {
    i.url = imageUrlFor(i).width(960).height(600).url()
    i.largeURL = imageUrlFor(i).width(1400).url()
    return i
  })

  console.log(vehicle.imageGallery)

  return (
    <Layout>
      <SEO title="Vehicles For Sale" />
      <div className="page-wrapper">
        <div className="container mx-auto">
          <div className="page-titles">
            <h1 className="text-2xl sm:text-2xl lg:text-3xl mt-6 text-center">
              {vehicle.title}
            </h1>
            <p className="text-lg lg:text-2xl text-center mb-0">
              {vehicle.price}
            </p>
          </div>

          <section className="text-gray-700 body-font overflow-hidden">
            <div className="container px-5 md:py-8 mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <ImageGallery slides={vehicle.imageGallery} />
                </div>
                <div className="lg:pl-10">
                  <h4 className="text-gray-900 text-2xl underlined underlined-secondary title-font font-semibold mb-4">
                    Vehicle Info
                  </h4>

                  <PortableText blocks={vehicle._rawBody} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default VehicleForSaleTemplate
