import React from "react"

const Footer = () => {
  return (
    <p className="footer-bar">
      &copy; {new Date().getFullYear()}
      <span>Guitar Mania</span>
    </p>
  )
}

export default Footer
