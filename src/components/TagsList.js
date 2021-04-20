import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ guitars }) => {
  const newTags = setupTags(guitars)
  console.log("test tags from taglist", newTags)
  return (
    <div>
      <h2>Tags</h2>
    </div>
  )
}

export default TagsList
