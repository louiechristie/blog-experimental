/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui"
import { graphql } from "gatsby"
// import Layout from "../components/Layout"
import BgImage from "../components/BgImage"

const SinglePOST = ({ data }) => {
  const { content, featuredImage, title } = data.wpPost

  return (
    <Container sx={{ maxWidth: `l` }}>
      <BgImage img={featuredImage} height="400px" />
      <Box sx={{ variant: `card.default` }}>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <Box
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Box>
    </Container>
  )
}
export default SinglePOST

export const pageQuery = graphql`
  query GET_POST($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      featuredImage {
        ...GatsbyImageQuery
      }
    }
  }
`
