import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import Image from 'gatsby-image'


const ComponentName = ({ data }) => {

    const {
        product: {
            price,
            title,
            image: {
                fixed
            },
            info: {
                info
            },
        },
    } = data

    return (
        <Layout>
            <div style={{ textAlign: "center" }}>
                <Link to="/products">Back to Products Page</Link>
                <h1>Product Detail : {title}</h1>
            </div>
            <section className="product-detail">
                <article>
                    <Image className="detail-image" fixed={fixed} alt={title}></Image>
                    <h3 className="detail-price">${price}</h3>
                </article>
                <article>
                    <p className="detail-info">{info}</p>
                </article>
            </section>
        </Layout>
    )
}

export const query = graphql`
  query getSingleProducts($slug:String) {
    product: contentfulProduct(slug: {eq: $slug}) {
      title
      price
      image {
        fixed (width: 300){
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
