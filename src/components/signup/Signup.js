import styled from "styled-components";
import tw from "tailwind.macro";
import React from "react";
import mediaSizes from '../../utils/media-sizes'

const SignupWrapper = styled.div`${tw`w-full md:w-1/2 md:order-4 mb-4`}`
const SignupCTA = styled.label`${tw`text-gray-400 block text-center md:text-right mb-2`}`

const InputGroup = styled.div`${tw`flex md:ml-auto`} ${mediaSizes.md`width: 90%; max-width: 600px;`}`
const Input = styled.input.attrs(props => ({
    type: 'email'
}))`${tw`bg-transparent block flex-grow w-full px-3 pl-5 py-2 border-2 border-white rounded-l-full text-white`} transition: 0.5s all ease; &::placeholder {${tw`text-gray-400`} opacity:1; } 
&:focus { ${tw`bg-white text-black`} }`
const Button = styled.button.attrs(props => ({
    type: 'submit'
}))`${tw`bg-white text-pink-300 block px-3 pr-5 py-2 border-2 border-white rounded-r-full border-l-0 hover:bg-pink-300 hover:text-white hover:border-pink-300`} transition: 0.5s all ease;`

const Signup = (props) => {
    return (
        <SignupWrapper>
            <SignupCTA htmlFor={"newsletter-email"}>Become a better web developer - weekly digest</SignupCTA>
            <InputGroup>
                <Input name={"newsletter-email"} id={"newsletter-email"} placeholder={"Email address"}/>
                <Button>Subscribe</Button>
            </InputGroup>
        </SignupWrapper>
    )
}
export default Signup