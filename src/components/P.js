import tw from "tailwind.macro"
import styled from "styled-components/macro"

const P = styled.p`
  ${tw`text-lg md:text-xl mb-4`}
  ${props => (props.small ? tw`text-base md:text-lg` : null)}
`
export default P
