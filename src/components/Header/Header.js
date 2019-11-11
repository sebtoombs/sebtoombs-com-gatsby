import React from "react"
import styled from "styled-components/macro"
import tw from "tailwind.macro"
import Container from "../Container"
import Row from "../Row"
import Col from "../Col"
import Brand from "./Brand"
import Nav from "./Nav"

const HeaderWrapStyled = styled.header`
  ${tw`pt-8 pb-20`}
`

const Header = props => {
  return (
    <HeaderWrapStyled>
      <Container>
        <Row>
          <Col w="1/2">
            <Brand />
          </Col>
          <Col w="1/2" css={tw`text-right`}>
            <Nav />
          </Col>
        </Row>
      </Container>
    </HeaderWrapStyled>
  )
}
export default Header
