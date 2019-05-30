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

class ErrorPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Col xs={12} align="center">
              <h1>You've hit a 404. Go back, or stay if you want.</h1>
              <img
                src="https://res.cloudinary.com/leemulvey/image/upload/v1559232803/Portfolio/404.jpg"
                alt="Life finds a way... you did not"
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default ErrorPage
