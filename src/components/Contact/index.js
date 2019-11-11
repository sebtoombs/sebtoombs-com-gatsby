import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"
import Heading from "../Heading"
import Row from "../Row"
import Col from "../Col"
import ReadingContainer from "../ReadingContainer"
import P from "../P"
import Conversation from "../../images/conversation"

import Link from "../Link"
import { FaEnvelope, FaTwitter } from "react-icons/fa"
import { MdLocalPhone } from "react-icons/md"

const ContactList = styled.ul``
const ContactListItem = styled.li`
  ${tw`mb-4`}
  a {
    ${tw`inline-block`}
  }
  & > a > svg {
    ${tw`inline-block text-4xl mr-3`}
  }
  span {
    ${tw``}
  }
`

const Contact = props => {
  return (
    <ReadingContainer css={tw`mb-32`}>
      <Heading size="2" css={tw`text-center`}>
        Contact
      </Heading>
      <Row>
        <Col w="1" md="1/2" css={tw`mb-10`}>
          <P>
            If you’d like to get in touch with me for any reason - to chat about
            a job, share an idea, give feedback on a blog post, or just say hi -
            you can send me an email, give me a call, or tweet me.
          </P>
          <ContactList>
            <ContactListItem>
              <a href="mailto:hi@sebtoombs.com" rel="nofollow noreferrer">
                <FaEnvelope />
                <Link as="span">
                  <span>hi@sebtoombs.com</span>
                </Link>
              </a>
            </ContactListItem>
            <ContactListItem>
              <a href="tel:0439567593" rel="nofollow noreferrer">
                <MdLocalPhone />
                <Link as="span">
                  <span>0439 567 593</span>
                </Link>
              </a>
            </ContactListItem>
            <ContactListItem>
              <a
                href="https://twitter.com/baffledbasti"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <FaTwitter />
                <Link as="span" external>
                  <span>@baffledbasti</span>
                </Link>
              </a>
            </ContactListItem>
          </ContactList>
        </Col>
        <Col w="1" md="1/2">
          <Conversation />
        </Col>
      </Row>
    </ReadingContainer>
  )
}
export default Contact
