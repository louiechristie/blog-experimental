/** @jsx jsx */
import { jsx, Box } from "theme-ui"

import { Link } from "gatsby"

const Pagination = ({ pageContext }) => {
  const {
    pageNumber,
    humanPageNumber,
    numberOfPages,
    limit,
    previousPagePath,
    nextPagePath,
  } = pageContext
  return (
    <nav sx={{ variant: `menus.pagination` }}>
      <Box sx={{ variant: `menus.prevNextLinks` }}>
        {humanPageNumber > 1 ? (
          <Link to={previousPagePath}>Previous Posts</Link>
        ) : (
          <Box sx={{ color: `mutted` }}>Previous Posts</Box>
        )}
      </Box>

      <Box sx={{ variant: `menus.pageNumbers` }}>
        {Array.from({ length: numberOfPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={i === 0 ? `/` : `/${i + 1}`}
          >
            {i + 1}
          </Link>
        ))}
      </Box>

      <Box sx={{ variant: `menus.prevNextLinks` }}>
        {humanPageNumber < limit ? (
          <Link to={nextPagePath}>Next Posts</Link>
        ) : (
          <Box sx={{ color: `mutted` }}>Next Posts</Box>
        )}
      </Box>
    </nav>
  )
}

export default Pagination
