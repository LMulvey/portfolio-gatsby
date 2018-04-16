const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    if (node.internal.type === 'MarkdownRemark') {
        const fileNode = getNode(node.parent);
        const slug = createFilePath({ node, getNode, basePath: 'projects' }).toLowerCase();
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }`).then(result => {
                result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    createPage({
                        path: `/projects${node.fields.slug}`,
                        component: path.resolve('./src/templates/project-page.js'),
                        context: {
                            // Data passed here is available as GraphQL data inside the component
                            slug: node.fields.slug
                        },
                    })
                });
                resolve();
            })
    })
}