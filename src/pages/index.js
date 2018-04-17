import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

class IndexPage extends Component {

  render() {
    const projects = this.props.data.allMarkdownRemark.edges;
    return (
      <ProjectsContainer>
        {projects.map((item) => (
          <Link to={`/projects${item.node.fields.slug}`}>
            <ProjectWrapper key={item.node.frontmatter.title.length * (Math.random() * 44)}>
              <ProjectImage src={item.node.frontmatter.bannerurl} />
              <ProjectTitle>{item.node.frontmatter.title}</ProjectTitle>
            </ProjectWrapper>
          </Link>
        ))}
      </ProjectsContainer>
    )
  }
}

export default IndexPage;

const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

const ProjectWrapper = styled.div`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: #333333;
  padding: 0;
  margin: 5px;
  border-radius: 6px;
  transition: transform 100ms ease-out;

  :hover {
    transform: scale(1.04);
    box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.4);
  }
`;

const ProjectImage = styled.img`
  position: relative;
  margin: 0;
  width: 295px;
  height: auto;
  object-fit: cover;
  opacity: 0.5;
  border-radius: 6px;
  transition: opacity 100ms ease-out;
  
  ${ProjectWrapper}:hover & {
    opacity: 0.8;
  }
`;

const ProjectTitle = styled.h3`
  position: absolute;
  padding: 0;
  margin: 0;
  line-height: 0;
  top: 45%;
  color: #F3F3F3;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.8);
  user-select: none;
`;


export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
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
