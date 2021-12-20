import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
const emojiList = "\\(^\u0414^)/ (\u0387.\u0387) (\u02da\u0394\u02da)b (\u0387_\u0387) (^_^)b (>_<) (o^^)o (;-;) (\u2265o\u2264) \\(o_o)/ (^-^*) (='X'=)".split(
    " "
)
const errorMap = {
  PAGE_NOT_FOUND: "Unfortunately, this page doesn't exist."
}
let emojiIndex = Math.floor(Math.random() * emojiList.length)

const NotFoundPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="404: Not Found" />
        <h1>404: Not Found</h1>
        <div
            className={`page-error`}
            style={{
              position: `absolute`,
              top: `50%`,
              left: `50%`,
              transform: `translate(-50%, -50%)`
            }}
        >
          <div
              className={`error-emoji`}
              style={{
                lineHeight: "150px",
                color: `#dadce0`,
                fontSize: `150px`
              }}
          >
            {emojiList[emojiIndex]}
          </div>
          <div
              className={`error-text`}
              style={{
                lineHeight: `21px`,
                marginTop: `60px`,
                whiteSpace: `pre-wrap`,
                textAlign: `center`
              }}
          >
            {errorMap.PAGE_NOT_FOUND}
          </div>
        </div>
          <p >
            <Link to="/">Go home</Link>
          </p>
      </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
