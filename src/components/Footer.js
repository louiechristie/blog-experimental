/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import packageData from "../../package.json"

const {
  author: { url, name },
} = packageData

const Footer = () => {
  return (
    <footer sx={{ variant: "footer" }}>
      <Container className="container">
        © {new Date().getFullYear()}, Made by
        {` `}
        <a href={url}>{name}</a>
      </Container>
    </footer>
  )
}

export default Footer
