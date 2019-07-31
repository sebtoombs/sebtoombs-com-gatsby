import React from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'
import {ContainerPadded} from "../container";


const HeaderStyled = styled.header`${tw`bg-pink-800`} background-image: linear-gradient(100deg, #e13fd1 0%, #9200ab 100%);`
const HeaderContainer = styled(ContainerPadded)`${tw``}`
const HeaderWrapper = styled.div`${tw`py-4 lg:py-6 flex flex-wrap`}`


const Header = (props) => {
    return (
        <HeaderStyled {...props}>
            <HeaderContainer>
                <HeaderWrapper>
                    {props.children}
                </HeaderWrapper>
            </HeaderContainer>
        </HeaderStyled>
    )
}


export default Header
