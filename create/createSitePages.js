const path = require(`path`)
const pageTemplate = path.resolve(`./src/templates/page.js`)

module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
  query GET_PAGES{
    allWpPage {
      nodes {
        title
        slug
      }
    }
    }
  `

  const { createPage } = actions

  const pagesQuery = await graphql(GET_PAGES)

  const pages = pagesQuery.data.allWpPage.nodes

  pages.map(page => {
    createPage({
      path: `/${page.slug}`,
      component: pageTemplate,
      context: {
        slug: page.slug,
      },
    })
  })
}
