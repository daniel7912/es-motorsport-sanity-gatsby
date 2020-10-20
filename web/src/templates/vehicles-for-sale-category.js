import React from "react"
import { graphql } from "gatsby"
import Card from "../components/Card/Card"
import Layout from "../containers/layout"
import SEO from "../components/seo"
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
  // console.log(vehicles)
  return (
    <Layout>
      <SEO title="Vehicles For Sale" />
      <div className="page-wrapper">
        <div className="page-titles">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl mt-6 text-center">
            Vehicles For Sale
          </h1>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-16 px-4">
            {vehicles.edges.map(({ node: vehicle }) => (
              <div className="column" key={v4()}>
                <Card contents={vehicle} type="vehicle" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default VehiclesForSaleCategoryTemplate
