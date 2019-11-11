import React from "react"
import styled from "styled-components/macro"
import tw from "tailwind.macro"

const Heading = styled.span`${tw`block mb-1 text-base text-gray-900`}
${props => (props.size == 1 ? tw`text-4xl md:text-4xl mb-6 md:mb-10` : null)}
${props => (props.size == 2 ? tw`text-3xl md:text-3xl mb-5 md:mb-8` : null)}
${props => (props.size == 3 ? tw`text-2xl md:text-2xl mb-4 md:mb-6` : null)}
${props => (props.size == 4 ? tw`text-lg md:text-xl mb-4 md:mb-5` : null)}
${props => (props.size == 5 ? tw`text-base md:text-lg mb-4` : null)}
${props => (props.size == 6 ? tw`text-base font-bold mb-3` : null)}
${props => (props.light ? tw`text-gray-700` : null)}
`

export default Heading
