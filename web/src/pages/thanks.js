import React from "react"
import Layout from "../containers/layout"
import SEO from "../components/seo"

const ThanksPage = () => {
  return (
    <Layout>
      <SEO title="Thanks for contacting us" />
      <div className="page-wrapper px-4">
        <h1 className="text-3xl sm:text-4xl mt-6 text-center">Thanks!</h1>
        <p className="text-center text-xl sm:text-2xl">
          Thank you for contacting us. We'll be in touch soon!
        </p>
      </div>
    </Layout>
  )
}

export default ThanksPage
