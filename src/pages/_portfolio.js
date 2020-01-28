import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import Layout from "../layouts/layout"

import SEO from "../components/SEO"
import Container from "../components/Container"
import Heading from "../components/Heading"

import PortfolioItem from "../components/PortfolioItem"

const IndexPage = () => (
  <Layout background="2">
    <SEO title="Portfolio" />
    <Container>
      <div css={tw`mb-20`}>
        <Heading as="h1" size="3">
          Portfolio
        </Heading>
      </div>

      <PortfolioItem
        data={{
          id: "kingsdesign",
          heading: "KingsDesign.com.au",
          content:
            "Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops.",
          link: {
            text: "Go to KingsDesign.com.au",
            url: "https://kingsdesign.com.au/",
          },
          tags: ["Website", "GatsbyJs"],
          date: "February 2019",
        }}
      />

      <PortfolioItem
        data={{
          id: "louvretecmelbourne",
          heading: "LouvreTecMelbourne.com.au",
          content:
            "Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops.",
          link: {
            text: "Go to LouvreTecMelbourne.com.au",
            url: "https://louvretecmelbourne.com.au/",
          },
          tags: ["Website", "Wordpress"],
          date: "November 2019",
        }}
      />

      <PortfolioItem
        data={{
          id: "whatsfordinner",
          heading: "What's for Dinner App",
          content:
            "Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops.",
          link: {
            text: "Go to What's for Dinner App",
            url: "https://whatsfordinner.sebtoombs.com/",
          },
          tags: ["App", "NextJs"],
          date: "November 2019",
        }}
      />

      <PortfolioItem
        data={{
          id: "tasmania",
          heading: "Tasmania.com",
          content:
            "Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops.",
          link: {
            text: "Go to Tasmania.com",
            url: "https://tasmania.com/",
          },
          tags: ["Website", "Wordpress"],
          date: "2018",
        }}
      />
    </Container>
  </Layout>
)

export default IndexPage
