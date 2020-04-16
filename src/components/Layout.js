/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import Header from "./Header.js"
import Footer from "./Footer.js"
import { Global } from "@emotion/core"
import { GlobalStyles } from "../styles/GlobalStyles"

import "../styles/scss/styles.scss"

const Layout = ({ children }) => (
  <Box>
    <Global styles={GlobalStyles} />
    <Header />
    <main sx={{ variant: "main" }}>{children}</main>
    <Footer />
  </Box>
)

export default Layout
