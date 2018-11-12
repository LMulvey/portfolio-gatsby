import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { Container, Row, Col } from 'react-grid-system'
import Layout from '../components/Layout'

const sortByDate = (
  {
    node: {
      frontmatter: { date: dateA },
    },
  },
  {
    node: {
      frontmatter: { date: dateB },
    },
  }
) => {
  const dateObjA = new Date(dateA)
  const dateObjB = new Date(dateB)

  /** Descending (most recent first) */
  if (dateObjA < dateObjB) return 1
  if (dateObjB < dateObjA) return -1
  return 0
}

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Col xs={10} offset={{ xs: 1 }}>
              <h1>Recent Work</h1>
            </Col>
          </Row>
          <Row justify="center">
            <StaticQuery
              query={projectsQuery}
              render={({ allMarkdownRemark: { edges: projects } }) => {
                return projects
                  .sort(sortByDate)
                  .map(
                    ({
                      node: {
                        frontmatter: { title, bannerurl },
                        fields: { slug },
                      },
                    }) => (
                      <Col xs={3} key={btoa(title) + Math.random() * 4400}>
                        <Link to={`/projects${slug}`}>
                          <ProjectWrapper imageSrc={bannerurl}>
                            <ProjectTitle>{title}</ProjectTitle>
                          </ProjectWrapper>
                        </Link>
                      </Col>
                    )
                  )
              }}
            />
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage

const ProjectWrapper = styled.div`
  background: url(${({ imageSrc }) => imageSrc}) center center;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 25px 5px;
  border-radius: 6px;
  height: 150px;
  transition: transform 100ms ease-out;

  :hover {
    transform: scale(1.04);
    box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.4);
  }
`

const ProjectTitle = styled.h3`
  color: #f3f3f3;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.8);
  user-select: none;
  margin: 0;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;
`

const projectsQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            date
            url
            bannerurl
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
