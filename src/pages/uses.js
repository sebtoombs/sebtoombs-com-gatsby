import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import Layout from "../layouts/layout"

import SEO from "../components/SEO"
import Container from "../components/Container"
import Heading from "../components/Heading"
import Row from "../components/Row"
import Col from "../components/Col"
import ReadingContainer from "../components/ReadingContainer"
import Link from "../components/Link"

const ListItemStyled = styled.li`
  ${tw`mb-8 md:mb-6 text-xl`}
  &:before {
    content: "//";
    ${tw`mr-3 text-gray-500`}
  }
`
const ListItemNoteStyled = styled.span`
  ${tw`text-gray-500 md:ml-6 text-lg block text-right md:inline-block`}
`
const ListItem = ({ text, note = null, link = null }) => {
  return (
    <ListItemStyled>
      {link ? (
        <Link href={link} as="a" target="blank" rel="noopener noreferrer">
          {text}
        </Link>
      ) : (
        text
      )}

      {note !== null ? <ListItemNoteStyled>{note}</ListItemNoteStyled> : null}
    </ListItemStyled>
  )
}

const List = styled.ul``

const UsesPage = () => (
  <Layout>
    <SEO title="Uses" />
    <Container>
      <Heading size="1">Things I Use</Heading>
      <Heading size="2" as="h1" light>
        A list of some of the tech I use.{" "}
      </Heading>
    </Container>
    <ReadingContainer css={tw`py-20 px-4`}>
      <Heading size="3" as="h2">
        Software
      </Heading>
      <List css={tw`mb-20`}>
        <ListItem
          text={`VS Code`}
          note={`Mostly`}
          link={`https://code.visualstudio.com/`}
        />
        <ListItem
          text={`Brave Browser`}
          note={`Sometimes Chrome`}
          link={`https://brave.com/`}
        />
        <ListItem
          text={`One Monokai`}
          note={`VS Code theme. I also like Material Dark, Light Visual Studio`}
          link={`https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai`}
        />
        <ListItem
          text={`Hasklig`}
          note={`Font for VS Code. Ligatures are awesome`}
          link={`https://github.com/i-tu/Hasklig`}
        />
        <ListItem
          text={`iTerm2 with ZSH`}
          note={`Way better than the standard terminal`}
          link={`https://iterm2.com/`}
        />
      </List>

      <Heading size="3" as="h2">
        Hardware
      </Heading>
      <List>
        <ListItem text={`Macbook Pro 13"`} note={`Recent Mac convert`} />
        <ListItem
          text={`Logitech MX Master 2s`}
          note={`Best mouse around, but I mainly use the trackpad`}
        />
        <ListItem
          text={`Dell LED Monitor`}
          note={`Got 2, they don't match, I can't remember what they are`}
        />
      </List>
    </ReadingContainer>
  </Layout>
)

export default UsesPage
