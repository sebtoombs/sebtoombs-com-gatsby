import React from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'
import {Link} from 'gatsby'

import Header from './header';
import MenuToggle from './menuToggle'
import Brand from './Brand'
import HeaderNav from "./HeaderNav";
import PageTitle from "./PageTitle";
import Signup from '../signup'
import Tags from './Tags'
import Search from './Search'
import HeaderBreak from './Break'

const BlogHeaderStyled = styled(Header)`${props=>props.noOverlap ? null : tw`pb-20 -mb-16`}`

const BlogHeader = (props) => {
    const pageTitle = props.title || "Blog"
    return (
        <BlogHeaderStyled {...props}>
            <MenuToggle/>
            <Brand/>
            <PageTitle>{window.location.pathname === '/blog' ? pageTitle : <Link to={`/blog`}>{pageTitle}</Link>}</PageTitle>
            <Search/>
            <HeaderNav/>

            <HeaderBreak css={tw`md:order-2`}/>

            <Signup/>

            <HeaderBreak css={tw`md:order-5`}/>

            <Tags/>
        </BlogHeaderStyled>
    )
}


export default BlogHeader
