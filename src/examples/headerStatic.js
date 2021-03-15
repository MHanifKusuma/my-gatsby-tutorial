import React from "react"
import { StaticQuery, graphql } from "gatsby"

const HeaderStatic = () => (
    <StaticQuery
        query={graphql`
      {
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
      }
    `}
        render={
            data =>
                <div>
                    <h1>GraphQL Example (StaticQuery)</h1>
                    <h4>{data.site.info.description}</h4>
                    <h1>=============================</h1>
                    <br></br>
                </div>

        }
    ></StaticQuery>
)

export default HeaderStatic
