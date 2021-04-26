import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import GuitarList from "../components/GuitarList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulGuitar: { nodes: guitars },
  },
}) => {
  console.log("test data for featured item", guitars)
  return (
    <Layout>
      <SEO title="About" description="rendered about page" />
      <main className="page">
        <section className="about-page-section">
          <article>
            <h2>Header</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
              voluptatibus? Lorem. Lorem ipsum dolor sit.
            </p>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </article>
          <StaticImage
            src="../assets/images/guitarist.jpg"
            alt="Guitar Player"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-guitars">
          <h1>Featured Guitars</h1>
          <GuitarList guitars={guitars} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulGuitar(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        content {
          id
        }
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            backgroundColor: "#000000"
            placeholder: DOMINANT_COLOR
          )
        }
      }
    }
  }
`

export default About
