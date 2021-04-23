import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"

const Tags = ({ data }) => {
  console.log("tags page data test", data)
  const newTags = setupTags(data.allContentfulGuitar.nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h3>{text}</h3>
                <p>{value} guitar(s)</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulGuitar {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
