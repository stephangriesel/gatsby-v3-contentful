import React from "react"

const GuitarTemplate = props => {
  console.log("template page data test", props)
  return (
    <div>
      <h4>{props.params.title}</h4>
    </div>
  )
}

export default GuitarTemplate
