import React from "react"
import Layout from "../components/Layout"
import AllGuitars from "../components/AllGuitars"
import SEO from "../components/SEO"

const Guitars = () => {
  return (
    <Layout>
      <SEO title="Guitars" />
      <main className="page">
        <AllGuitars />
      </main>
    </Layout>
  )
}

export default Guitars
