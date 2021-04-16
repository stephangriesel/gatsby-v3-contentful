import React from "react"
import TagsList from "./TagsList"
import GuitarList from "./GuitarList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulGuitar(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        content {
          tags
        }
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            backgroundColor: "#000000"
            placeholder: TRACED_SVG
          )
        }
      }
    }
  }
`

const AllGuitars = () => {
  const data = useStaticQuery(query)
  console.log("test data.. ", data)

  const guitars = data.allContentfulGuitar.nodes
  console.log("test data for guitar data", guitars)

  return (
    <div>
      <h2>All Guitars</h2>
      <TagsList guitars={guitars} />
      <GuitarList guitars={guitars} />
    </div>
  )
}

export default AllGuitars
