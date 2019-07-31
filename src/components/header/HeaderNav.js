import { Link } from "gatsby"
import React, {Component} from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'


const HeaderNavStyled = styled.nav`${tw`hidden md:flex text-white text-2xl justify-end items-center md:order-1`} flex-grow: 1;
li { ${tw`inline-block px-6`} &:last-child {${tw`pr-0`} } &:first-child {${tw`pl-0`}} }
a { ${tw`block`} }`

const HeaderNav = (props) => {
    return (
        <HeaderNavStyled>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to={"/blog"}>Blog</Link></li>
            </ul>
        </HeaderNavStyled>
    )
}

export default HeaderNav