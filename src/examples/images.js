import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import mountainImg from '../assets/images/mountainImg.jpg'
import Image from 'gatsby-image'

const getImages = graphql`{
        fixed: file(relativePath:{eq:"mountainImg.jpg"}) {
            childImageSharp {
                fixed(grayscale: true) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        fluid: file(relativePath:{eq:"mountainImg.jpg"}) {
            childImageSharp {
                fluid{
                    ...GatsbyImageSharpFluid

                }
            }
        }
        example: file(relativePath:{eq: "desertImg.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }`

function Images() {


    const data = useStaticQuery(getImages)
    console.log(data)

    return (
        <section className="images">


            <article className="single-image">
                <h3>Basic Image</h3>

                <img src={mountainImg} alt="mountainImage" width="100%"></img>

            </article>
            <article className="single-image">
                <h3>Fixed Image - Blur</h3>

                <Image fixed={data.fixed.childImageSharp.fixed} />
            </article>
            <article className="single-image">
                <h3>Fluid Image - SVG</h3>

                <Image fluid={data.fluid.childImageSharp.fluid} />
                <div>
                    <h5>Content</h5>
                    <Image fluid={data.example.childImageSharp.fluid} />
                </div>
            </article>
        </section>
    )
}

export default Images
