/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Page = ({ data }) => {
  const { title, content } = data.wpPage
  return (
    <Layout>
      <Container>
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
