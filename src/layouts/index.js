import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image';
import styled from 'styled-components';

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'photos of waves' },
        { name: 'keywords', content: 'web developer, developer, freelance, react, redux, node, javascript, css, html, ruby, rails, postgresql, mongodb, gatsby' },
      ]}
    >
      <link rel="stylesheet" href="https://use.typekit.net/mxs6bub.css" />
      <script defer src="https://pro.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-+1nLPoB0gaUktsZJP+ycZectl3GX7wP8Xf2PE/JHrb7X1u7Emm+v7wJMbAcPr8Ge" crossorigin="anonymous"></script>
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
   
    <ContentContainer>
      {children()}
    </ContentContainer>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
`;

const ContentContainer = styled.div`
  margin: 25px auto;
  padding: 0px 1.0875rem 1.45rem;
  max-width: 960px;
`;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
