import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        &copy; {new Date().getFullYear()}
        <span> Guitar Mania</span>
      </p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  //
`

export default Footer
