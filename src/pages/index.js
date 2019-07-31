import React from "react"
import styled from "styled-components";
import tw from "tailwind.macro";
import {graphql} from 'gatsby'

import SEO from "../components/seo"
import Header from '../components/header'
import MenuToggle from '../components/header/menuToggle'
import Brand from '../components/header/Brand'
import HeaderNav from '../components/header/HeaderNav'
import HeaderBreak from '../components/header/Break'
import Footer from '../components/footer'
import OverlayNav from '../components/overlay-nav'
import OverlaySearch from '../components/overlay-search'
import { HomeProfileImage } from "../components/ProfileImage";
import { ContainerPadded } from "../components/container";

const HomeHero = styled.div`${tw`px-10 max-w-xl mx-auto`}`
const HomeHeroHeading = styled.span`${tw`block text-white text-3xl md:text-4xl mb-6`}`
const HomeHeroText = styled.span`${tw`block text-white text-lg md:text-xl mb-4`}`

const Heading = styled.span`${tw`text-gray-900 block text-left font-medium`}
${props => {
  if(props.size === 1) return tw`text-4xl`
}}`

const IndexPage = (props) => {

  return (
    <>
      <SEO title="Home"/>
      <Header {...props}>
        <MenuToggle/>
        <Brand/>
        <HeaderNav/>

        <HeaderBreak css={tw`order-4`}/>

        <div css={tw`order-5 w-full`}>
          <HomeHero>
            <HomeProfileImage/>
            <HomeHeroHeading>I make websites better.</HomeHeroHeading>
            <HomeHeroText>Chuck meatloaf kielbasa shank brisket venison ham. Cupim andouille tongue ground round corned beef porchetta venison, beef tenderloin chicken bacon shankle sirloin.</HomeHeroText>
          </HomeHero>
        </div>
        
      </Header>

      <main>

        <ContainerPadded>
          <Heading size={1} as={'h1'}>Hi, I'm Seb</Heading>
        </ContainerPadded>

      </main>

      <Footer/>
      <OverlayNav />
      <OverlaySearch/>
    </>
  )
  }

export default IndexPage