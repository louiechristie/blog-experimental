export const createLocalLink = url => {
  if (`#` === url) {
    return null
  }
  return url.replace(process.env.GATSBY_WORDPRESS_URL, ``)
}
