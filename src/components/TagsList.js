import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

const TagsList = ({ guitars }) => {
  const newTags = setupTags(guitars)
  console.log("test tags from taglist", newTags)
  return (
    <div className="tag-container">
      <h2>Guitars</h2>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
