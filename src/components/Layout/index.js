import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../Header'
import { GlobalStyles } from './styles'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={metaDataQuery}
    render={({ site: { siteMetadata } }) => (
      <React.Fragment>
        <GlobalStyles />
        <Helmet title={siteMetadata.title} meta={siteMetadata.meta}>
          <link rel="stylesheet" href="https://use.typekit.net/mxs6bub.css" />
          <script
            defer
            src="https://pro.fontawesome.com/releases/v5.0.10/js/all.js"
            integrity="sha384-+1nLPoB0gaUktsZJP+ycZectl3GX7wP8Xf2PE/JHrb7X1u7Emm+v7wJMbAcPr8Ge"
            crossorigin="anonymous"
          />
        </Helmet>
        <Header />
        {children}
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

const metaDataQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        meta {
          name
          content
        }
      }
    }
  }
`
