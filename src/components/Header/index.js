import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import MetaButton from './MetaButton'

const descriptors = [
  'Weird Dad',
  'Super Weird Dad',
  'Mustache Curator',
  'Dog',
  'Card Tricker',
  'Father of Bean',
  'Mentor',
  'Lighthouse',
  'Cupboard',
  'Surfboard, Surfboard',
  'Ghost 👻',
]

const titleCase = string => string.charAt(0).toUpperCase() + string.substring(1)

const randomDescriptor = () =>
  titleCase(descriptors[Math.floor(Math.random() * (descriptors.length - 1))])

const Header = () => (
  <Container>
    <Row justify="center">
      <Col lg={6} xs={12}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Wordmark>Lee Mulvey</Wordmark>
          <Submark>Developer, Creator, {randomDescriptor()}, Do-er</Submark>
        </Link>
      </Col>
    </Row>
    <Row justify="center">
      <Col xs={10}>
        <ButtonsContainer>
          <MetaButton
            title="Blog"
            link="http://www.leemulvey.com/blog"
            icon="fal fa-newspaper"
          />
          <MetaButton
            title="Twitter"
            theme={{ main: '#1dcaff', contrast: 'white' }}
            link="http://www.twitter.com/LeeMulvey"
            icon="fab fa-twitter"
          />
          <MetaButton
            title="GitHub"
            link="http://www.github.com/LMulvey"
            icon="fab fa-github"
          />
          <MetaButton
            title="StackOverflow"
            theme={{ main: '#FF9900', contrast: 'white', color: '#FF6922' }}
            link="https://stackoverflow.com/users/8246359"
            icon="fab fa-stack-overflow"
          />
        </ButtonsContainer>
      </Col>
    </Row>
  </Container>
)

export default Header

const Wordmark = styled.h1`
  display: block;
  font-family: 'flood-std', sans-serif;
  font-size: 5rem;
  text-align: center;
  text-shadow: -5px -5px 0px white;
  background: #1a2a6c;
  background: linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 0;
  @media (max-width: 340px) {
    font-size: 3.5rem;
  }
`

const Submark = styled.p`
  display: block;
  margin-top: -15px;
  text-align: center;
  border-radius: 6px;
  font-weight: 700;
  color: rgb(255, 82, 0);
  font-size: 22px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 10px;
  text-decoration: italic;
  @media (max-width: 340px) {
    font-size: 0.8rem;
    padding: 8px;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`
