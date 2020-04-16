/** @jsx jsx */
import { jsx, Container } from "theme-ui"

const Footer = () => (
  <footer sx={{ variant: "footer" }}>
    <Container className="container">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  </footer>
)

export default Footer
