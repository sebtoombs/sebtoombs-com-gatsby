import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components";
import tw from "tailwind.macro";


const PostProfileImageWrapper = styled.div`width: 35px; ${tw`mr-4`}`
const PostProfileImage = (props) => {
    return (
        <PostProfileImageWrapper {...props}>
            <ProfileImage/>
        </PostProfileImageWrapper>
    )
}
export {PostProfileImage}


const HomeProfileImageWrapper = styled.div`max-width: 15rem; ${tw`mx-auto border border-white rounded-full mb-12`}`
const HomeProfileImage = (props) => {
    return (
        <HomeProfileImageWrapper {...props}>
            <ProfileImage size={"large"}/>
        </HomeProfileImageWrapper>
    )
}
export {HomeProfileImage}




const ProfileImageWrapper = styled.div`${tw`rounded-full overflow-hidden`}`

const ProfileImage = (props) => {

  const data = useStaticQuery(staticQuery)


  const size = props.size ? props.size : "small"

  return (
    <ProfileImageWrapper {...props}>
        <Img fluid={data.profileImage[size].fluid} />
    </ProfileImageWrapper>
  )
}

export default ProfileImage


const staticQuery = graphql`query{
    profileImage: file(relativePath: {eq:"profile.jpg"}) {
        small: childImageSharp {
            fluid(maxWidth: 160, maxHeight: 160, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
            }
        }
        medium: childImageSharp {
            fluid(maxWidth: 360, maxHeight: 360, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
            }
        }
        large: childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}`