import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Container, Row, Col, ScreenClassRender } from 'react-grid-system';
import Layout from '../components/Layout';
import { sortByDate } from '../helpers/sort';

const ProjectWrapper = styled.div`
  background: url(${({ imageSrc }) => imageSrc}) center center;
  background-size: cover;
  border: 1px solid #f3f3f3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 25px 5px;
  border-radius: 6px;
  min-height: 150px;
  height: 150px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  :hover {
    box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.4);
    transform: scale(1.08);
  }

  &:after {
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
`;

const ProjectTitle = styled.h3`
  color: #f3f3f3;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.8);
  user-select: none;
  margin: 0;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;

  :hover {
    text-decoration: none !important;
  }
`;

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
`;

function IndexPage() {
  return (
    <Layout>
      <ScreenClassRender
        render={screenClass => (
          <Container>
            <Row
              justify={['xs', 'sm'].includes(screenClass) ? 'center' : 'start'}
            >
              <StaticQuery
                query={projectsQuery}
                render={({ allMarkdownRemark: { edges: projects } }) =>
                  projects
                    .sort(sortByDate)
                    .map(
                      ({
                        node: {
                          frontmatter: { title, bannerurl },
                          fields: { slug }
                        }
                      }) => (
                        <Col
                          sm={12}
                          md={6}
                          lg={3}
                          key={title + Math.random() * 4400}
                        >
                          <Link to={`/projects${slug}`}>
                            <ProjectWrapper imageSrc={bannerurl}>
                              <ProjectTitle>{title}</ProjectTitle>
                            </ProjectWrapper>
                          </Link>
                        </Col>
                      )
                    )
                }
              />
            </Row>
            <Row align="center" justify="center">
              <Col xs={12}>
                <h2>
                  Like what you see? Give me a shout:{' '}
                  <a href="mailto:hello@leemulvey.com">
                    hello@leemulvey.com
                    <span role="img" aria-label="peace-sign">
                      ✌🏻
                    </span>
                  </a>
                </h2>
              </Col>
            </Row>
          </Container>
        )}
      />
    </Layout>
  );
}

export default IndexPage;
