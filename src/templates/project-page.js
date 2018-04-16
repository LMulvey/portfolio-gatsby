import React from 'react';
import Helmet from 'react-helmet';

export default ({ data }) => {
    const project = data.markdownRemark;
    return (
        <div>
            <Helmet title={`${project.frontmatter.title} | ${data.site.siteMetadata.title}`} />
            <h1>{project.frontmatter.title}</h1>
            <a href={project.frontmatter.url}>{project.frontmatter.url}</a>
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
            <img src={project.frontmatter.bannerurl} />
        </div>
    )
}

export const query = graphql`
    query ProjectPageQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                url
                bannerurl
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;