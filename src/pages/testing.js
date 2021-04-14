import React from "react"
import { graphql } from "gatsby"

const Testing = ({ data }) => {
  console.log("test page query data", data)
  const title = data.site.siteMetadata.title
  return (
    <div>
      <h3>title: {title}</h3>
    </div>
  )
}

export const data = graphql`
  {
    site {
      siteMetadata {
        title
        description
        person {
          name
          age
        }
        testDataBasic
        testDataAdvanced {
          name
          age
        }
      }
    }
  }
`

export default Testing
