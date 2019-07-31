import React from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from "prop-types"

import Header from './header';
import MenuToggle from './menuToggle'
import Brand from './Brand'
import HeaderNav from "./HeaderNav";
import PageTitle from "./PageTitle";
import Search from './Search'
import HeaderBreak from './Break'

const StandardHeader = (props) => {
    return (
        <Header {...props}>
            <MenuToggle/>
            <Brand/>
            <PageTitle>{props.pageTitle}</PageTitle>
            <Search/>
            <HeaderNav/>

            <HeaderBreak css={tw`md:order-2`}/>

        </Header>
    )
}

StandardHeader.propTypes = {
    pageTitle: PropTypes.string.isRequired
}

export default StandardHeader
