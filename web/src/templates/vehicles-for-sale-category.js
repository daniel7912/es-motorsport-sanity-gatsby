import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../containers/layout"
import { v4 } from "uuid"

export const query = graphql`
  query CategoryTemplateQuery($limit: Int!, $skip: Int!) {
    vehicles: allSanityVehiclesForSale(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          slug {
            current
          }
          price
          mainImage {
            alt
            asset {
              fluid(maxWidth: 1920) {
                ...GatsbySanityImageFluid
              }
            }
          }
          _rawExcerpt(resolveReferences: { maxDepth: 5 })
        }
      }
    }
  }
`

const VehiclesForSaleCategoryTemplate = props => {
  const { data } = props
  const vehicles = data && data.vehicles
  console.log(vehicles)
  return (
    <Layout>
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-8">
          Vehicles For Sale
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-16 px-4">
          {vehicles.edges.map(({ node: vehicle }) => (
            <div className="column" key={v4()}>
              <Img
                fluid={vehicle.mainImage.asset.fluid}
                alt={vehicle.mainImage.alt}
              />
              <h3 className="text-2xl font-semibold mt-4">{vehicle.title}</h3>
              <p className="text-xl font-semibold">{vehicle.price}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default VehiclesForSaleCategoryTemplate
