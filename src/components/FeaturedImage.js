import React from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { isBrowser } from "../utils/isBrowser";
import viewport from '../utils/viewport'

const FeaturedImageStyled = styled.div`max-height: 500px;`

const FeaturedImage = (props) => {

  const size = props.size ? props.size : null

  const data = useStaticQuery(staticQuery)

  const GetFeaturedImage = () => {
    const image = props.post.featuredImage ? props.post.featuredImage : {asset: data.placeholderImage}
    if(!isBrowser) return image.asset.small
    if((viewport().w <= 640 && size !== 'large') || size === 'small') return image.asset.small
    return image.asset.large
  }

if(props.link) return (<Link to={`/blog/${props.post.slug.current}`}><FeaturedImageStyled as={Img} fluid={GetFeaturedImage()} width="600" height="498"/></Link>)
  return (<FeaturedImageStyled as={Img} fluid={GetFeaturedImage()} width="1280" height="498"/>)
}

export default FeaturedImage


const staticQuery = graphql`query{
  placeholderImage: file(relativePath: {
      eq:"blank.jpg"
  }) {
      large: childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 498, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
          }
      }
      small: childImageSharp {
          fluid(maxWidth: 600, maxHeight: 498, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
          }
      }
  }
}`