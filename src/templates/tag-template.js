import React from "react"
import { graphql } from "gatsby"
import GuitarList from "../components/GuitarList"
import Layout from "../components/Layout"

const TagTemplate = ({ data, pageContext }) => {
  const guitars = data.allContentfulGuitar.nodes
  console.log("tag template data test", data)
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-guitars">
          <GuitarList guitars={guitars} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetGuitarByTag($tag: String) {
    allContentfulGuitar(
      sort: { order: ASC, fields: title }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
