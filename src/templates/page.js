/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui"
import { graphql } from "gatsby"
// import Layout from "../components/Layout"

const Page = ({ data }) => {
  console.log("data", data)
  const { title, content } = data.wpPage
  return (
    <Container>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Container>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      content
      title
    }
  }
`
