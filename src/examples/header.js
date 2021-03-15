import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {

    const query = graphql`
    query MyQuery {
        site {
            info: siteMetadata {
                author
                data
                description
                title
                person {
                    age
                    name
                }
            }
        }
    }`

    const getData = useStaticQuery(query)
    const data = getData.site.info

    return (
        <div><br></br>
            <h1>Graphql Example (StaticQuery Hook)</h1>
            <h3>Title: {data.title}</h3>
            <h3>User Name: {data.person.name}</h3>
            <h1>================================</h1>
            <br></br>
        </div>
    )
}

export default Header
