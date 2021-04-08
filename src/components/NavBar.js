import React from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="">
            <span>GuitarMania</span>
          </Link>
          <button className="nav-btn">
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="links show-links">
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
          <Link
            to="/guitars"
            className="nav-link"
            activeClassName="active-link"
          >
            Guitars
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link">
            Tags
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            About
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
