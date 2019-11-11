import React from "react"
import styled from "styled-components/macro"
import tw from "tailwind.macro"

const ButtonWrap = styled.span`
  ${tw`relative overflow-hidden`}
  &:after {
    ${tw`absolute w-full bottom-0 bg-pink-700 left-0`}
    transition: 0.2s transform ease, 0.2s height ease;
    height: 2px;
    content: "";
    opacity: 0;
    transform: translateY(2px);
  }
`

const ButtonStyled = styled.button`
  ${tw`bg-gray-400 text-black px-2 py-1 rounded-lg text-center inline-block hover:text-pink-700`}
  transition: 0.2s background-color ease, 0.2s color ease, 0.2s color ease;
  ${props => (props.shadow ? tw`shadow-xl` : null)}
  ${props => (props.size && props.size === "lg" ? tw`px-6 py-2 text-xl` : null)}
  ${props =>
    props.size && props.size === "xl" ? tw`px-8 py-3 text-2xl` : null}
  ${props => (props.disabled ? tw`bg-gray-200 text-gray-600` : null)}
  ${props => (props.block ? tw`block w-full` : null)}

  ${props =>
    props.primary ? tw`bg-indigo-600 text-white hover:bg-indigo-500` : null}

  ${props => (props.disabled ? tw`opacity-50 cursor-default` : null)}

  &:hover ${ButtonWrap}:after {
    transform: translateY(0);
    opacity: 1;
    height: 4px;
  }
`

const Button = props => {
  let passProps = { ...props }

  const propList = ["primary", "block"]

  propList.map(propName => {
    if (typeof props[propName] !== "undefined") {
      passProps[propName] = "true"
    }
  })

  return (
    <ButtonStyled {...passProps}>
      <ButtonWrap>{props.children}</ButtonWrap>
    </ButtonStyled>
  )
}
export default Button
