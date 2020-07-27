import { graphql } from "gatsby"

export const query = graphql`
  fragment PageBuilder on SanityPage {
    _rawPageBuilder(resolveReferences: { maxDepth: 10 })
    pageBuilder {
      ... on SanityCarousel {
        _key
        _type
        title
        carouselSettings {
          containered
          hideContent
        }
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
          ... on SanityCard {
            _key
            _type
            title
            image {
              asset {
                fluid(maxWidth: 1920) {
                  ...GatsbySanityImageFluid
                }
                fixed(width: 500, height: 500) {
                  ...GatsbySanityImageFixed
                }
              }
            }
          }
          ... on SanityImageLink {
            _key
            _type
            title
            image {
              asset {
                fluid(maxWidth: 1920) {
                  ...GatsbySanityImageFluid
                }
                fixed(width: 500, height: 500) {
                  ...GatsbySanityImageFixed
                }
              }
            }
          }
        }
        sectionTitles {
          title
          subtitle
          hideTitles
        }
        columnSizes {
          xs
          sm
          md
          lg
          xl
        }
        gapSizes {
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
            fluid(maxWidth: 1600) {
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
        # image {
        #   alt
        #   asset {
        #     fluid(maxWidth: 800) {
        #       ...GatsbySanityImageFluid
        #     }
        #   }
        # }
      }
    }
  }
`
