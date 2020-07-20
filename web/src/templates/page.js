import React from "react"
import { graphql } from "gatsby"
import Layout from "../containers/layout"
import PageBuilder from "../components/PageBuilder"
import SEO from "../components/SEO"

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      ...PageBuilder
      title
      slug {
        current
      }
      hideTitle
    }
  }
`

const PageTemplate = props => {
  const { data } = props
  const page = data && data.page
  return (
    <Layout>
      <SEO title={page.title} />
      <div className="page-wrapper">
        {!page.hideTitle && (
          <h1 className="text-3xl sm:text-4xl mt-6 text-center">
            {page.title}
          </h1>
        )}
        <PageBuilder contents={page} />
      </div>
    </Layout>
  )
}

export default PageTemplate
