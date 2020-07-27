import React from "react"
import { graphql } from "gatsby"
import Layout from "../containers/layout"
import PageBuilder from "../components/PageBuilder"
import SEO from "../components/seo"

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      ...PageBuilder
      title
      subtitle
      slug {
        current
      }
      hideTitles
    }
  }
`

const PageTemplate = props => {
  const { data } = props
  const page = data && data.page
  console.log(page)
  return (
    <Layout>
      <SEO title={page.title} />
      <div className="page-wrapper">
        {!page.hideTitles && (
          <div className="page-titles">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl mt-6 text-center">
              {page.title}
            </h1>
            <h2 className="text-lg lg:text-xl text-center">{page.subtitle}</h2>
          </div>
        )}
        <PageBuilder contents={page} />
      </div>
    </Layout>
  )
}

export default PageTemplate
