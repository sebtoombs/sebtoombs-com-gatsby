import React from "react"
import styled from "styled-components/macro"
import tw from "tailwind.macro"
import { Link as GatsbyLink } from "gatsby"
import { GoLinkExternal } from "react-icons/go"

const LinkWrap = styled.span`
  ${tw`relative inline-block`}
  &:after {
    ${tw`absolute bottom-0 w-full bg-indigo-800 left-0`}
    height: 2px;
    content: " ";
    transition: 0.2s height ease;
  }

  footer &:after {
    ${tw`bg-white`}
  }
`

const LinkStyled = styled.a`
  ${tw`inline-block text-indigo-800 px-1`}

  & > svg {
    ${tw`inline-block ml-2 text-sm`}
  }

  &:hover,
  a:hover & {
    ${tw`text-indigo-900`}
  }
  &:hover ${LinkWrap}:after, a:hover & ${LinkWrap}:after {
    height: 4px;
    ${tw`bg-pink-700`}
  }

  footer & {
    ${tw`text-white`}
  }
  footer &:hover,
  footer a:hover & {
    ${tw`text-gray-200`}
  }
`

const Link = props => {
  return (
    <LinkStyled as={GatsbyLink} {...props}>
      <LinkWrap>{props.children}</LinkWrap>
      {(props.target && props.target === "_blank") || props.external ? (
        <GoLinkExternal />
      ) : null}
    </LinkStyled>
  )
}
export default Link
