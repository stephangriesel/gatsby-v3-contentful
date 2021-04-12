import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
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
      </main>
    </Layout>
  )
}

export default About
