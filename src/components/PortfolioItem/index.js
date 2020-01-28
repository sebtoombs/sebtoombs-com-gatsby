import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"
import Heading from "../Heading"
import Row from "../Row"
import Col from "../Col"
import Section from "../Section"
import { RoundedCard } from "../Card"
import P from "../P"
import Link from "../Link"

const PortfolioItem = props => {
  const { data } = props
  const { id, heading, content, link, tags, date } = data
  const { text, url } = link

  return (
    <Section id={id} css={tw`mb-12 lg:mb-20`}>
      <Heading size="2" as="h2" css={tw`text-center`}>
        {heading}
      </Heading>
      <Row css={tw`mb-12 py-4`}>
        <Col w="1" md="1/2" css={tw`mb-12`}>
          <RoundedCard css={tw`bg-gray-200`} roundedAll>
            <div
              css={`
                padding-bottom: 66%;
              `}
            ></div>
          </RoundedCard>
        </Col>
        <Col w="1" md="1/2" css={tw`mb-12`}>
          <div css={tw`px-2 lg:pl-8 lg:pr-4`}>
            <div css={tw`flex items-center text-pink-700 mb-6`}>
              {tags.map((tag, index) => (
                <React.Fragment key={index}>
                  <p>{tag}</p>
                  {index <= tags.length - 2 ? (
                    <span css={tw`text-pink-900 text-2xl mx-2`}>/</span>
                  ) : null}
                </React.Fragment>
              ))}
              <p css={tw`ml-auto text-pink-900`}>{date}</p>
            </div>
            <P>{content}</P>
            <div css={tw`mt-8`}>
              <Link as="a" href={url} target="_blank" rel="nofollow">
                {text}
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Section>
  )
}
export default PortfolioItem
