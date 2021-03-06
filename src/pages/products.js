import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import * as styles from '../components/products.module.css'
import Image from 'gatsby-image'

const ComponentName = ({ data }) => {

    const {
        allContentfulProduct: {
            nodes: products
        }
    } = data

    return (
        <Layout>
            <section className={styles.page}>

                {
                    products.map((product) => {
                        return (
                            <article key={product.id}>
                                <Image fluid={product.image.fluid} alt={product.title} />
                                <h3>{product.title} <span>${product.price}</span></h3>
                                <Link to={`/products/${product.slug}`} >Detail</Link>
                            </article>
                        )
                    })
                }
            </section>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
