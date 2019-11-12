import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"
import Heading from "../Heading"
import Row from "../Row"
import Col from "../Col"
import SVGWrapper from "../SVGWrapper"
import MaleAvatar from "../../images/male_avatar.svg"
import ReadingContainer from "../ReadingContainer"
import { FaInfo, FaMapMarker } from "react-icons/fa"
import P from "../P"
import Button from "../Button"
import Link from "../Link"

const AboutList = styled.ul``
const AboutItem = styled.li`
  ${tw`flex items-center mb-3`}
  svg {
    ${tw`inline-block text-2xl mr-3`}
  }
  span {
    ${tw`inline-block text-lg md:text-2xl`}
  }
`

const About = props => {
  return (
    <ReadingContainer css={tw`mb-32`}>
      <Heading size="2" as="h2" css={tw`text-center`}>
        About me
      </Heading>
      <Row css={tw`mb-8`}>
        <Col w="1" md="1/2" css={tw`text-right`}>
          <SVGWrapper
            css={`
              width: 64px;
              ${tw`mx-auto md:ml-auto md:mr-4 mb-3`}
            `}
          >
            <MaleAvatar />
          </SVGWrapper>
        </Col>
        <Col w="1" md="1/2">
          <AboutList>
            <AboutItem>
              <FaInfo />
              <span>Web developer</span>
            </AboutItem>
            <AboutItem>
              <FaMapMarker />
              <span>Hobart, Tasmania, Australia</span>
            </AboutItem>
          </AboutList>
        </Col>
      </Row>
      <Heading size="3" light>
        I’m a web developer, specialising in Javascript, React, Node and
        Wordpress
      </Heading>
      <P>
        I build, maintain, support and improve websites and apps. I primarily
        work with Javascript and React, and PHP and Wordpress. I also help build
        better user journeys by designing better user experiences.
      </P>
      <P>
        I am available for hire either as a contractor, through my agency
        <Link
          as="a"
          href="https://www.kingsdesign.com.au/contact"
          target="_blank"
          rel="nofollow"
        >
          KingsDesign
        </Link>
        , or as a consultant.
      </P>
      <div css={tw`py-10`}>
        <Button primary shadow size="lg" as="a" href="#contact">
          Hire me
        </Button>
      </div>
    </ReadingContainer>
  )
}

export default About
