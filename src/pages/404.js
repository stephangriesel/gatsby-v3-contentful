import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="error" description="Error Page" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <p>Page not found</p>
        </section>
      </main>
    </Layout>
  )
}

export default Error
