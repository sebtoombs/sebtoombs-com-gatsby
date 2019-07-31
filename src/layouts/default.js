

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import OverlayNav from '../components/overlay-nav';
import OverlaySearch from "../components/overlay-search";
import Container from "../components/container";
import StandardHeader from "../components/header/standardHeader";
import Footer from '../components/footer'

const Layout = ({ children, pageTitle }) => {
    /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/

    return (
        <>
            <StandardHeader pageTitle={pageTitle ? pageTitle : "No title"}/>
            <main>{children}</main>
            <Footer/>
            <OverlayNav />
            <OverlaySearch/>

        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
