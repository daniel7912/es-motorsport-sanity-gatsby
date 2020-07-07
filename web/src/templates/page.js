import React from "react"
import { graphql } from "gatsby"
import Layout from "../containers/layout"
import PageBuilder from "../components/PageBuilder"

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      ...PageBuilder
      title
      slug {
        current
      }
    }
  }
`

const PageTemplate = props => {
  const { data } = props
  const page = data && data.page
  // console.log(page)
  return (
    <Layout>
      <PageBuilder contents={page} />
    </Layout>
  )
}

export default PageTemplate
