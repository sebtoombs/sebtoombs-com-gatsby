import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"
import Container from "./Container"
import Link from "./Link"

const FooterStyled = styled.footer`
  ${tw`bg-indigo-900 text-white py-8`}
`

const Footer = props => {
  return (
    <FooterStyled>
      <Container>
        <p css={tw`font-bold mb-3 text-lg`}>Seb Toombs</p>©{" "}
        {new Date().getFullYear()}, Built with
        {` `}
        <Link
          as="a"
          href="https://www.gatsbyjs.org"
          rel="nofollow"
          target="_blank"
        >
          Gatsby
        </Link>
      </Container>
    </FooterStyled>
  )
}
export default Footer
