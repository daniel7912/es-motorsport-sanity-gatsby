import React from "react"
// import { graphql } from "gatsby"
import Layout from "../containers/layout"

// export const query = graphql`
//   query CategoryTemplateQuery($id: String!) {
//     page: sanityPage(id: { eq: $id }) {
//       id
//       ...PageBuilder
//       title
//       slug {
//         current
//       }
//     }
//   }
// `

const CategoryTemplate = props => {
  // const { data } = props
  // const page = data && data.page
  // console.log(page)
  return (
    <Layout>
      <p>Category page</p>
    </Layout>
  )
}

export default CategoryTemplate
