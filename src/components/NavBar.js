import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/guitars">Guitars</Link>
          <Link to="/tags">Tags</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
