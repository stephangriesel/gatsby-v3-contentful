import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image" // getImage helper function: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#getimage

const GuitarList = ({ guitars = [] }) => {
  return (
    <div className="guitars-list">
      {guitars.map(guitar => {
        console.log(guitar)
        const { id, title, image } = guitar
        const pathToImage = getImage(image)
        return (
          <Link key={id} to={`/${title}`} className="guitar">
            <GatsbyImage
              image={pathToImage}
              className="guitar-img"
              alt={title}
            />
            <h5>{title}</h5>
          </Link>
        )
      })}
    </div>
  )
}

export default GuitarList
