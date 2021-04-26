import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsFillInfoCircleFill, BsFileEarmarkText } from "react-icons/bs"
import { BiCalculator } from "react-icons/bi"
import slugify from "slugify"
import SEO from "../components/SEO"

import Layout from "../components/Layout"

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
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <div className="guitar-page">
          <section className="guitar-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="template-img"
            />
            <article className="guitar-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="guitar-icons">
                <article>
                  <BiCalculator />
                  <h5>Dimensions</h5>
                  <p>{weightanddimensions}</p>
                </article>
                <article>
                  <BsFileEarmarkText />
                  <h5>Product Specs</h5>
                  <p>{productspecs}</p>
                </article>
                <article>
                  <BiCalculator />
                  <h5>Info</h5>
                  <p>{basicinfo}</p>
                </article>
              </div>
              <p className="guitar-tags">
                Tags:
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="guitar-content">
            <article className="left-column">Left Column</article>
            <article className="second-column">
              <div>
                <h4>data</h4>
              </div>
              <div>
                <h4>more data</h4>
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
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
