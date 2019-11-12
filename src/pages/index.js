import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import Layout from "../layouts/layout"

import SEO from "../components/SEO"
import Container from "../components/Container"
import Heading from "../components/Heading"
import Row from "../components/Row"
import Col from "../components/Col"
import Section from "../components/Section"

import About from "../components/About"
import Contact from "../components/Contact"

import Button from "../components/Button"

import { FaTwitter, FaEnvelope, FaGlobe } from "react-icons/fa"

import SVGWrapper from "../components/SVGWrapper"
import CodeThinking from "../images/code_thinking.svg"

const ContactItem = styled.a`
  ${tw`px-6 md:px-10`}
  &:first-child {
    ${tw`pl-0`}
  }
  &:last-child {
    ${tw`pr-0`}
  }
`
const IconWrap = styled.span`
  ${tw`inline-block rounded-lg bg-indigo-800 text-white text-4xl p-2 hover:bg-pink-700`}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col w="1" md="1/2" css={tw`mb-16 md:mb-0`}>
          <Heading size="1">Hi There!</Heading>
          <Heading size="2" as="h1" light>
            I'm Seb and I'm a frontend developer &amp; UX designer.
          </Heading>
          <div css={tw`text-center p-1`}>
            <Button primary size="xl" shadow as="a" href="#contact">
              Work with me
            </Button>
          </div>
        </Col>
        <Col w="1" md="1/2">
          <SVGWrapper>
            <CodeThinking />
          </SVGWrapper>
        </Col>
      </Row>

      <div css={tw`text-center py-20 md:py-32`}>
        <div>
          <ContactItem
            as="a"
            href="https://twitter.com/baffledbasti"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <IconWrap>
              <FaTwitter />
            </IconWrap>
          </ContactItem>
          <ContactItem
            as="a"
            href="mailto:hi@sebtoombs.com"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <IconWrap>
              <FaEnvelope />
            </IconWrap>
          </ContactItem>
          <ContactItem
            as="a"
            href="https://kingsdesign.com.au/about"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <IconWrap>
              <FaGlobe />
            </IconWrap>
          </ContactItem>
        </div>
      </div>

      <Section id="about">
        <About />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>
    </Container>
  </Layout>
)

export default IndexPage
