import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "../assets/css/styles.css"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      {children}
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  //
`

export default Layout
