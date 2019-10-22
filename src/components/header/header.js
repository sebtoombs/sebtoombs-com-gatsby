import React from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'
import {ContainerPadded} from "../container";


const HeaderStyled = styled.header`${tw`bg-pink-800`} background-image: linear-gradient(100deg, #e13fd1 0%, #9200ab 100%);`
const HeaderContainer = styled(ContainerPadded)`${tw``}`
const HeaderWrapper = styled.div`${tw`py-4 lg:py-6 flex flex-wrap`}`
const HeaderSVG = styled.div`${tw`relative pt-10x`} top: 1px;
svg {${tw`w-full`}}`

const Header = (props) => {
    return (
        <HeaderStyled {...props}>
            <HeaderContainer>
                <HeaderWrapper>
                    {props.children}
                </HeaderWrapper>
            </HeaderContainer>
            {props.svg ? (<HeaderSVG>
                <svg preserveAspectRatio="none" width="767px" height="73px" viewBox="0 0 767 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Home-Page" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="home-01-tablet-default" transform="translate(-1.000000, -556.000000)" fill="#FFFFFF">
                            <polygon id="Path-2" points="1 586.801308 190.525864 556.78635 585.176825 610 769 579.179063 769 628.699907 1 628.699907"/>
                        </g>
                    </g>
                </svg>
            </HeaderSVG>) : null}
        </HeaderStyled>
    )
}


export default Header
