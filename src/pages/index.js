import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import FetchData from "../examples/fetchData"

export default function Home() {
  return (
    <Layout>
      <main>
        <header className="hero">
          <StaticImage
            src="../assets/images/guitar.jpg"
            alt="guitar"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Guitar Mania</h1>
              <h4>If it is too loud, you are too old</h4>
            </div>
          </div>
        </header>
        <FetchData />
      </main>
    </Layout>
  )
}
