import styled, {css} from 'styled-components'
import tw from 'tailwind.macro'

const ButtonStyle = css`${tw`inline-block rounded py-1 px-3 bg-transparent border border-solid border-transparent appearance-none cursor-pointer text-black hover:text-gray-900`} transition: 0.5s color ease, 0.5s border-color ease, 0.5s background-color ease;
${props => {
    if(props.color === "primary") return tw`text-white bg-pink-300 border-pink-300 hover:text-gray-100 hover:border-pink-800 hover:bg-pink-800`
}}
${props => props.outline ? tw`bg-transparent` : null}
${props => {
    if(props.outline && props.color === "primary") return tw`text-pink-300 hover:bg-transparent hover:text-pink-800`
}}`
export default ButtonStyle

const Button = styled.button.attrs({
    type:'button'
})`${ButtonStyle}`
export {Button}

const ButtonLink = styled.a`${ButtonStyle}`
export {ButtonLink}