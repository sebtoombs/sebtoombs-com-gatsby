import React from "react"
import styled from "styled-components/macro"
import tw from "tailwind.macro"

const BackgroundStyled = styled.div`
  ${tw`absolute left-0 top-0 w-full h-full`}
`

const Triangle = styled.div`
  ${tw`relative w-full`}
`

const TriangleProp = styled.div`
  padding-bottom: 100%;
`

const TriangleShape = styled.div`
  ${tw`absolute w-full h-full top-0 left-0 overflow-hidden`}
  &:after {
    ${tw`absolute top-0 w-full left-0 bg-gray-100`}
    content: "";
    padding-bottom: 100%;
    z-index: -1;
    transform-origin: 0 0;
    transform: rotate(-30deg) skewX(30deg);
  }
`

const Background = props => {
  return (
    <BackgroundStyled>
      <Triangle>
        <TriangleProp />
        <TriangleShape />
      </Triangle>
    </BackgroundStyled>
  )
}

export default Background
