import styled from 'styled-components'
import tw from 'tailwind.macro'

const Heading = styled.span`${tw`text-gray-900 block font-medium`}
${props => {
  if(props.size === 1) return tw`text-4xl mb-6`
  if(props.size === 2) return tw`text-2xl text-gray-700 font-light mb-5`
  if(props.size === 3) return tw`text-3xl mb-4`
  if(props.size === 4) return tw`text-xl mb-3`
  if(props.size === 5) return tw`text-lg mb-2`
}}
${props => props.light ? tw`font-light` : ''}`
export default Heading