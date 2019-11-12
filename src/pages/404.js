import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/SEO"
import Container from "../components/Container"
import Heading from "../components/Heading"
import P from "../components/P"
import ReadingContainer from "../components/ReadingContainer"
import Link from "../components/Link"
import tw from "tailwind.macro"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <ReadingContainer css={tw`mb-32`}>
        <Heading size="1" as="h1">
          Not Found
        </Heading>
        <P>Oops, the link you followed seems to be broken.</P>
        <P>
          If this really annoys you, please send me an email at
          <Link href="mailto:hi@sebtoombs.com" rel="nofollow">
            hi@sebtoombs.com
          </Link>
          and let me know;
        </P>
        <ul>
          <li>
            The URL of the page you were on before this one (how you got here)
          </li>
        </ul>
      </ReadingContainer>
    </Container>
  </Layout>
)

export default NotFoundPage
