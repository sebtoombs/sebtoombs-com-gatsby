import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import {MdOpenInNew} from 'react-icons/md'

const LinkStyle = styled.a`${tw`relative inline-block hover:text-pink-300`} transition: 0.5s color ease;
&:after { 
    ${tw`block absolute w-full bottom-0 bg-black`}
    content: "";
    height: 2px;
    transition: 0.5s background-color ease;
}
&:hover:after {
    ${tw`bg-pink-300`}
}`
export default LinkStyle



const LinkExternalWrapper = styled.span`${tw``}`
const LinkExternalIcon = styled.span`${tw``}
svg {${tw`inline-block ml-1 w-4`}}`

const LinkExternal = (props) => {
    return (
        <LinkStyle {...props}>
            <LinkExternalWrapper>{props.children}</LinkExternalWrapper>
            <LinkExternalIcon><MdOpenInNew/></LinkExternalIcon>
        </LinkStyle>
    )
}
export {LinkExternal}