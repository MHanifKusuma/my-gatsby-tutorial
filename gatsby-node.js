const path = require('path')
//create pages dynamically

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const getProducts = await graphql(`
        query getProducts {
            products: allContentfulProduct {
                nodes {
                slug
                }
            }
        }
    `);

    const products = getProducts.data.products.nodes

    products.forEach((product) => {
        createPage({
            path: `/products/${product.slug}`,
            component: path.resolve(`src/templates/productTemplate.js`),
            context: {
                slug: product.slug,
            },
        })
    })
}