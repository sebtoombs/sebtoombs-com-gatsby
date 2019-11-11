import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

const SectionStyled = styled.section`
  &.focus {
    animation: bg-pulse 2s 1;
  }
  @keyframes bg-pulse {
    0% {
      background-color: transparent;
    }
    20% {
      background-color: #fffff0;
    }
    30% {
      background-color: #fffff0;
    }
    100% {
      background-color: transparent;
    }
  }
`

const Section = props => {
  const className = props.className + " focus"
  return (
    <SectionStyled {...props} className={className}>
      {props.children}
    </SectionStyled>
  )
}
export default Section
