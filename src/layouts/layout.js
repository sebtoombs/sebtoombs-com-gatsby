/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components/macro"
import tw from "tailwind.macro"

import "../styles/layout.css"

import Header from "../components/Header"
import Background from "../components/Background"
import Footer from "../components/Footer"

const LayoutWrapper = styled.div`
  ${tw`relative overflow-hidden`}
`
const LayoutContent = styled.div`
  ${tw`relative`}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <LayoutWrapper>
        <Background />
        <LayoutContent>
          <Header />
          <main>{children}</main>
          <Footer />
        </LayoutContent>
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
