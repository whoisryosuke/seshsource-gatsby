/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require("gatsby-paginate")

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

/**
 *  Pagination for /blog/ page
 */
function createBlogPagination(graphql, createPage, resolve, reject) {
  graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { section: { eq: "blog" } } }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              cover_image {
                publicURL
                childImageSharp {
                  sizes(maxWidth: 1240) {
                    srcSet
                  }
                }
              }
              section
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: "src/templates/blog-archive.js",
      pageLength: 6,
      pathPrefix: "blog",
      buildPath: (index, pathPrefix) =>
        index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
    })
  })
}

/**
 *  Pagination for /projects/ page
 */
function createEventCategories(graphql, createPage, resolve, reject) {
  graphql(`
    {
      allWordpressWpEventCat {
        edges {
          node {
            id
            name
            slug
            description
          }
        }
      }
    }
  `).then(result => {
    // Make tag pages
    result.data.allWordpressWpEventCat.edges.forEach(({ node }) => {
      createPage({
        path: `/category/${node.slug}/`,
        component: path.resolve(`./src/templates/tags.js`),
        context: {
          name: node.name,
          slug: node.slug,
        },
      })
    })
  })
}

/**
 *  Pagination for /projects/ page
 */
function createProjectsPagination(graphql, createPage, resolve, reject) {
  graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { section: { eq: "project" } } }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              cover_image {
                publicURL
                childImageSharp {
                  sizes(maxWidth: 1240) {
                    srcSet
                  }
                }
              }
              section
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: "src/templates/blog-archive.js",
      pageLength: 6,
      pathPrefix: "projects",
      buildPath: (index, pathPrefix) =>
        index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
    })
  })
}

/**
 *  Create slug pages for markdown files
 *  Create pages for each tag
 *
 *  Only pull published posts by
 *  checking for status=publish
 */
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWordpressWpEvent(
          filter: { status: { eq: "publish" } }
          sort: { fields: date, order: DESC }
        ) {
          edges {
            node {
              date
              id
              slug
              title
              content
              event_cat
              event_start_date
              event_end_date
            }
          }
        }
      }
    `).then(result => {
      /**
       * Create blog posts based on slugs
       */
      result.data.allWordpressWpEvent.edges.forEach(({ node }) => {
        // Grab random tag to do related posts
        // Must provide default tag or GraphQL will break on all event posts
        let tag
        if (node.event_cat.length > 0) {
          tag =
            node.event_cat[Math.floor(Math.random() * node.event_cat.length)]
        } else {
          tag = 252
        }

        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/event-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            id: node.id,
            tag: tag,
            slug: node.slug,
          },
        })
      })

      resolve()
    })
    /**
     * Create archive pages for event categories
     */
    // createEventCategories(graphql, createPage);

    // createBlogPagination(graphql, createPage);
    // createProjectsPagination(graphql, createPage);
  })
}
