import React from 'react'
import Header from '../examples/header'
import Layout from '../components/layout'
import HeaderStatic from '../examples/headerStatic'
import { graphql } from 'gatsby'

const examples = ({ data }) => {

    const {
        site: {
            info: {
                author
            }
        }
    } = data

    return (
        <Layout>
            <div>
                <h1>Examples Page</h1>
                <Header />
                <HeaderStatic />
                <h1>Graphql Example (Page Query)</h1>
                <h3>Author: {author}</h3>
                <h1>=============================</h1>
            </div>
        </Layout>
    )
}

export const data = graphql`
    query pageQuery {
        site {
            info: siteMetadata {
                author
                data
                description
                person {
                    age
                    name
                }
                title
            }
        }
    }
`

export default examples
