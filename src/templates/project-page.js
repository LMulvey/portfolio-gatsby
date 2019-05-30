import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'

import Layout from '../components/Layout'

const StatusBadge = styled.h6`
  background-color: ${({ status }) => (status === 'completed' ? 'springgreen' : '#BADA55')};
  color: white;
  font-weight: bold;
  display: inline-block;
  padding: 5px 10px;
  margin: 5px 0;
  border-radius: 10px;
  text-align: center;
`

const TechBadge = styled.h6`
  background-color: #e74c3c;
  color: white;
  font-weight: bold;
  margin: none;
  border-radius: 10px;
  max-width: 100px;
  padding: 5px 10px;
  text-align: center;
  display: inline-block;
  margin: 5px;
`

const StyledH1 = styled.h1`
  border: 0px;
`

const StyledH3 = styled.h3`
  display: block;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.15);
  text-align: center;
`

const ProjectLinkWrapper = styled.h2`
  padding: 15px;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.15);
  a {
    font-weight: normal;
  }
`

const RowWithBottomBorder = styled(Row)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  margin-bottom: 25px;
`
const MarginRow = styled(Row)`
  margin-bottom: 25px;
`

const resolveStatus = status => {
  switch (status) {
    case 'ongoing':
      return 'Ongoing'
    case 'inprogress':
      return 'In Progress'
    case 'contributor':
      return 'Contributor (open source)'
    case 'complete':
    default:
      return 'Completed'
  }
}

export default ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, status, url, bannerurl, technologies, photos },
      html,
    },
    site,
  } = data
  const resolvedStatus = resolveStatus(status)

  return (
    <Layout>
      <Helmet title={`${title} | ${site.siteMetadata.title}`} />
      <Container>
        <RowWithBottomBorder justify="betwee ">
          <Col>
            <StyledH1>{title}</StyledH1>
          </Col>

          <Col xs={12} md={2}>
            <Link to="/">
              <StyledH3>← Home</StyledH3>
            </Link>
          </Col>
        </RowWithBottomBorder>
        <MarginRow justify="between">
          <Col>
            <StatusBadge status={status}>{resolvedStatus}</StatusBadge>
          </Col>

          <Col align="right">
            {technologies.map(tech => (
              <TechBadge>{tech}</TechBadge>
            ))}
          </Col>
        </MarginRow>
        {url ? (
          <MarginRow justify="center">
            <Col>
              <ProjectLinkWrapper>
                Project URL: <a href={url}>{url}</a>
              </ProjectLinkWrapper>
            </Col>
          </MarginRow>
        ) : null}
        <MarginRow justify="center">
          <Col>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Col>
        </MarginRow>
        <Row>
          <Col align="center">
            <Carousel
              renderCenterLeftControls={({ previousSlide }) =>
                photos.length ? (
                  <CarouselButton title="Previous slide" onClick={previousSlide}>
                    <i className="fas fa-angle-double-left fa-5x" />
                  </CarouselButton>
                ) : null
              }
              renderCenterRightControls={({ nextSlide }) =>
                photos.length ? (
                  <CarouselButton title="Next slide" onClick={nextSlide}>
                    <i className="fas fa-angle-double-right fa-5x" />
                  </CarouselButton>
                ) : null
              }
            >
              <img alt={title} src={bannerurl} />
              {photos.map(src => (
                <img key={src} alt={title} src={src} />
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

const CarouselButton = styled.button`
  color: white;
  padding: 0 5px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 120ms ease-in-out;
  transition-property: background, transform;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        url
        bannerurl
        status
        technologies
        photos
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
