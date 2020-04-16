/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Menu from "./Menu"
import Headroom from "react-headroom"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wp {
        generalSettings {
          description
          title
        }
      }
    }
  `)

  const { title, description } = data.wp.generalSettings

  return (
    <Headroom>
      <header sx={{ variant: "header" }}>
        <Container>
          <h1 sx={{ variant: `text.branding` }}>
            <Link to="/" rel="home">
              {title}
            </Link>
          </h1>
          <Menu />
        </Container>
      </header>
    </Headroom>
  )
}

export default Header
