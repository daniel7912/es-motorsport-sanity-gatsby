const { isFuture } = require("date-fns")
const { paginate } = require("gatsby-awesome-pagination")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns")

async function createSanityPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.allSanityPage || {}).edges || []

  pageEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node
    let path

    if (slug.current === "home") {
      path = "/"
    } else {
      path = `/${slug.current}/`
    }

    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { id },
    })
  })
}

async function createSanityCategoryPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityCategory {
        edges {
          node {
            slug {
              current
            }
            title
            id
            template
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const categoryEdges = (result.data.allSanityCategory || {}).edges || []

  categoryEdges.forEach((edge, index) => {
    const template = edge.node.template
      ? `${edge.node.template}-category`
      : "category"

    paginate({
      createPage,
      items: categoryEdges,
      itemsPerPage: 20,
      pathPrefix: ({ pageNumber }) =>
        pageNumber === 0
          ? `/category/${edge.node.slug.current}`
          : `/category/${edge.node.slug.current}/page`,
      component: require.resolve(`./src/templates/${template}.js`),
    })
  })
}

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node
      const dateSegment = format(publishedAt, "YYYY/MM")
      const path = `/blog/${dateSegment}/${slug.current}/`

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id },
      })
    })
}

async function createVehiclesForSalePages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityVehiclesForSale(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const vehicleEdges = (result.data.allSanityVehiclesForSale || {}).edges || []

  vehicleEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {} } = edge.node
      const path = `/vehicles-for-sale/${slug.current}/`

      createPage({
        path,
        component: require.resolve("./src/templates/vehicle-for-sale.js"),
        context: { id },
      })
    })
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions)
  await createSanityCategoryPages(graphql, actions)
  await createSanityPages(graphql, actions)
  await createVehiclesForSalePages(graphql, actions)
}
