import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

const RoundedCard = styled.div`
  ${tw` shadow-xl bg-white overflow-hidden`}
  ${props =>
    props.roundedAll
      ? tw`rounded-t-lg rounded-bl-lg`
      : null}
  border-bottom-right-radius: 2.5rem;
`
export default RoundedCard
