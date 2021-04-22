import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsFillInfoCircleFill, BsFileEarmarkText } from "react-icons/bs"
import { BiCalculator } from "react-icons/bi"

// Data in this template will be available as variable, example title query

const GuitarTemplate = ({ data }) => {
  console.log("template page data test", data)
  const {
    title,
    content,
    description: { description },
    image,
  } = data.contentfulGuitar
  const pathToImage = getImage(image) // Helper function for image
  const { productspecs, weightanddimensions, tags, basicinfo } = content // destructure content data
  return (
    <main className="page">
      <div className="guitar-page">
        <h1>{title}</h1>
      </div>
    </main>
  )
}

export const query = graphql`
  query getSingleGuitar($title: String) {
    contentfulGuitar(title: { eq: $title }) {
      title
      content {
        productspecs
        weightanddimensions
        tags
        basicinfo
      }
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default GuitarTemplate
