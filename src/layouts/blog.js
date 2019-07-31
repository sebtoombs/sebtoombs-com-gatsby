

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {BlogHeader} from "../components/header"
import OverlayNav from '../components/overlay-nav';
import OverlaySearch from "../components/overlay-search";
import Footer from "../components/footer";

const BlogLayout = ({ children, noOverlap, title }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
            <BlogHeader title={title} siteTitle={data.site.siteMetadata.title} noOverlap={noOverlap}/>
            <main>{children}</main>
            <Footer/>
            <OverlayNav />
            <OverlaySearch/>

        </>
    )
}

BlogLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BlogLayout
