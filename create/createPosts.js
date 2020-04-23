const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const postTemplate = path.resolve(`./src/templates/post.js`)
const blogTemplate = path.resolve(`./src/templates/blog.js`)

module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
    query GET_POSTS($limit:Int ){
        allWpPost(limit: $limit) {
        nodes {
          title
          uri
        }
      }
      }
    `
  const { createPage } = actions

  //create a page for each post

  const postsQuery = await graphql(GET_POSTS)
  const posts = postsQuery.data.allWpPost.nodes

  posts.map(post => {
    createPage({
      path: `/${post.uri}`,
      component: postTemplate,
      context: {
        uri: post.uri,
      },
    })
  })

  // Create a blog page containing all "posts" and paginate.

  paginate({
    createPage,
    pathPrefix: "/",
    component: blogTemplate,
    items: posts,
    itemsPerPage: 13,
  })
}
