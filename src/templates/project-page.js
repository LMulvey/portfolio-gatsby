import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Container, Row, Col, ScreenClassRender } from 'react-grid-system'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'

import Layout from '../components/Layout'

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
      <ScreenClassRender
        render={screenClass => (
          <Container>
            <RowWithBottomBorder justify="between" align="center">
              <TitleContainer
                xs={12}
                md={10}
                align={['xs', 'sm'].includes(screenClass) ? 'center' : 'start'}
              >
                <ProjectTitle>{title}</ProjectTitle>
                <StatusBadge status={status}>{resolvedStatus}</StatusBadge>
              </TitleContainer>

              <Col xs={12} md={2}>
                <Link to="/">
                  <StyledH3>← Home</StyledH3>
                </Link>
              </Col>
            </RowWithBottomBorder>
            <MarginRow justify={['xs', 'sm'].includes(screenClass) ? 'center' : 'end'}>
              <Col xs={12} md={6} align={['xs', 'sm'].includes(screenClass) ? 'center' : 'right'}>
                {technologies.map(tech => (
                  <TechBadge>{tech}</TechBadge>
                ))}
              </Col>
            </MarginRow>
            {url ? (
              <MarginRow justify="center">
                <Col align={['xs', 'sm'].includes(screenClass) ? 'center' : 'start'}>
                  <ProjectLinkWrapper>
                    <a href={url}>
                      <span>📎</span> View {title}
                    </a>
                  </ProjectLinkWrapper>
                </Col>
              </MarginRow>
            ) : null}
            <MarginRow justify="center">
              <Col align={['xs', 'sm'].includes(screenClass) ? 'center' : 'start'}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </Col>
            </MarginRow>
            <Row>
              <Col align="center">
                <Carousel
                  renderCenterLeftControls={({ previousSlide }) =>
                    photos.length ? (
                      <CarouselButton title="Previous slide" onClick={previousSlide}>
                        <i className="fas fa-angle-left fa-3x" />
                      </CarouselButton>
                    ) : null
                  }
                  renderCenterRightControls={({ nextSlide }) =>
                    photos.length ? (
                      <CarouselButton title="Next slide" onClick={nextSlide}>
                        <i className="fas fa-angle-right fa-3x" />
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
        )}
      />
    </Layout>
  )
}

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

const ProjectTitle = styled.h1`
  border: 0px;
  display: inline-block;
  margin: 0 15px 0 0;
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
    color: #ffffff;
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

const TitleContainer = styled(Col)`
  display: flex;
  align-items: center;
  margin-top: 50px;
`

const CarouselButton = styled.button`
  color: white;
  padding: 10px 15px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 120ms ease-in-out;
  transition-property: background, transform;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }

  &:first-of-type {
    margin-left: 5px;
  }

  &:last-of-type {
    margin-right: 5px;
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
