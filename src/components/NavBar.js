import React, { useState } from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="nav-bar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <span>GuitarMania</span>
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="/guitars"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Guitars
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
