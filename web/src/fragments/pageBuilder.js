import { graphql } from "gatsby"

export const query = graphql`
  fragment PageBuilder on SanityPage {
    _rawPageBuilder(resolveReferences: { maxDepth: 10 })
    pageBuilder {
      ... on SanityCarousel {
        _key
        _type
        title
        slides {
          title
          body
          image {
            alt
            asset {
              fluid(maxWidth: 1920) {
                ...GatsbySanityImageFluid
              }
            }
          }
          link {
            label
            url
          }
        }
      }
      ... on SanityForm {
        _key
        _type
        title
      }
      ... on SanityGrid {
        _key
        _type
        columns {
          _key
          _type
          title
          image {
            asset {
              fluid(maxWidth: 1920) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        settings {
          xs
          sm
          md
          lg
          xl
        }
      }
      ... on SanityFeatureBlock {
        _key
        _type
        layout
        image {
          alt
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      ... on SanityInstagramFeed {
        _key
        _type
        title
      }
      ... on SanityPageBuilderContent {
        _key
        _type
        title
        image {
          alt
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
