/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Page = ({ data }) => {
  const { title, content } = data.wpPage
  return (
    <Layout>
      <SEO title={title} />

      <Container className="content">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </Container>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      content
      title
    }
  }
`
