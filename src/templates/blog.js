/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import Pagination from "../components/Pagination"
import BgImage from "../components/BgImage"

const Blog = ({ data, pageContext }) => {
  const posts = data.allWpPost.nodes
  const { pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext
  return (
    <Layout>
      <SEO title={"Home"} />

      <Container sx={{ maxWidth: `l` }}>
        {data &&
          data.allWpPost &&
          posts.map(post => (
            <article key={post.id}>
              <Link to={`/${post.uri}`}>
                <Box>
                  <BgImage img={post.featuredImage} height="400px" />
                </Box>
              </Link>
              <Box sx={{ variant: `card.default`, mb: 8 }}>
                <h2>
                  <Link
                    to={`/${post.uri}`}
                    dangerouslySetInnerHTML={{ __html: post.title }}
                    sx={{ color: `text`, "&:hover": { color: `primary` } }}
                  />
                </h2>
                <Box
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt,
                  }}
                />
                <Flex
                  sx={{
                    justifyContent: [`center`, `flex-end`],
                    mt: 7,
                    mr: [0, 10],
                  }}
                >
                  <Link
                    to={`/${post.uri}`}
                    sx={{ variant: `buttons.secondary` }}
                  >
                    Read More
                  </Link>
                </Flex>
              </Box>
            </article>
          ))}
        <Pagination pageContext={pageContext} />
      </Container>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query GET_POSTS($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip) {
      nodes {
        id
        uri
        title
        excerpt
        date
        featuredImage {
          ...GatsbyImageQuery
        }
      }
    }
  }
`
