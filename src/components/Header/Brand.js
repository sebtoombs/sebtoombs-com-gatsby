import React from "react"
import styled from "styled-components/macro"
import tw from "tailwind.macro"
import { Link } from "gatsby"

const BrandWrap = styled.a`
  ${tw`inline-block`}
`
const BrandStyled = styled.span`
  ${tw`text-xl text-gray-900 block`}
`

const Brand = props => {
  return (
    <BrandWrap as={Link} to={`/`}>
      <BrandStyled>Seb Toombs</BrandStyled>
    </BrandWrap>
  )
}
export default Brand
