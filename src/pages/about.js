import React from "react"
import styled from "styled-components";
import tw from "tailwind.macro";
import {graphql, Link} from 'gatsby'

import Layout from '../layouts/default'

import SEO from "../components/seo"
import { ContainerReading } from "../components/container";

import Heading from '../components/Heading';
import P from '../components/Paragraph'
import LinkStyle, { LinkExternal } from '../components/LinkStyle'

const List = styled.ul`${tw`list-inside mb-4`}`
const Li = styled.li`${tw`text-xl mb-2 block`}`
//const LiWrapper = styled.span`${tw`inline-block relative pl-8 -ml-8`}`
//const LiIcon = styled.span`${tw`absolute w-6 h-6 left-0`}`

const AboutPage = (props) => {

  return (
    <Layout pageTitle="About">
      <SEO title="About"/>
      
      <ContainerReading>

        <div css={tw`text-center py-10`}>
            <Heading size={1} as={"h1"}>About Me</Heading>
            <List>            
                <Li>👨‍💻 Web Developer</Li>
                <Li>🇦🇺 Hobart, Australia</Li>
                <Li>👤 User experience, #perfmatters</Li>
            </List>
            <P>I'm a web developer with a strong frontend focus, however my work necessitates a bit of a fullstack attitude. I work primarily with Javascript, React, Wordpress and PHP.</P>
            <P>My real focus is helping people deliver better user experiences by improving user interfaces, frontend performance, and making better customer journeys.</P>
        </div>

 
        <div css={tw`text-center py-10`}>
            <Heading size={1} as={"h2"}>About This Site</Heading>
            <P>This site is a static site built with <LinkExternal href="https://gatsbyjs.org" rel="nofollow" target="_blank">Gatsby</LinkExternal>. Gatsby is a lightning-fast static site generator that uses React for the frontend.</P>
            <P>For styling I've used styled-components with Tailwindcss, because the developer experience is amazing. Don't @ me.</P>
            <P></P>
        </div>
      </ContainerReading>
    </Layout>
  )
  }

export default AboutPage
