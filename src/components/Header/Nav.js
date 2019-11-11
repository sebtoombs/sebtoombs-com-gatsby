import React from "react"
import styled from "styled-components/macro"
import tw from "tailwind.macro"
//import { Link } from "gatsby"
import Link from "../Link"

const NavStyled = styled.nav`
  ${tw``}
`
const NavItem = styled.span`
  ${tw`text-indigo-800 text-xl inline-block my-3 block`}
  &:first-child {
    ${tw`mt-0`}
  }
  &:last-child {
    ${tw`mb-0`}
  }
`

const Nav = props => {
  return (
    <NavStyled>
      <NavItem>
        <Link to={`/#about`}>About</Link>
      </NavItem>
      {/*<NavItem>
        <Link to={`/blog`}>Blog</Link>
      </NavItem>*/}
      <NavItem>
        <Link to={`/#contact`}>Contact</Link>
      </NavItem>
    </NavStyled>
  )
}
export default Nav
