import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import { graphql, Link } from "gatsby"
import ucfirst from "../utils/ucfirst"

import BlogLayout from "../layouts/blog"
import SEO from "../components/seo"
import { MdFiberManualRecord } from "react-icons/md"
import FeaturedImage from "../components/FeaturedImage"
import {PostProfileImage} from "../components/ProfileImage"
import { ContainerPadded } from "../components/container";

const PostWrapper = styled.div``
const PostContainer = styled.div`
  ${tw`px-4 md:px-8 lg:px-24 py-4 lg:py-20 -mt-16 lg:-mt-24 relative z-10 bg-white max-w-5xl mx-auto`}
`
const PostTitle = styled.h1`
  ${tw`text-3xl md:text-4xl mb-4 font-medium`}
`
const PostTag = styled.span`
  ${tw`text-pink-300 inline-block text-sm mr-3`}
`
const PostContent = styled.div`
  ${tw`text-xl md:leading-relaxed`}
  p, ul {
    ${tw`mb-5 mt-3 p-1`}
    font-family: Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif;
  }
  h2 {
    ${tw`text-gray-700 text-2xl md:text-3xl font-light mb-4 leading-normal`}
  }
  h3 {
    ${tw`text-3xl md:text-4xl mb-4`}
  }
  img {
    ${tw`mx-auto`}
  }
  ul {
    ${tw`ml-4 md:ml-8 list-disc list-inside`}
  }
  figcaption {
    ${tw`text-sm italic text-center`}
  }
`

const Post = props => {
  if (!(props.data && props.data.post))
    return (
      <p>
        <strong>Post data missing!</strong>
      </p>
    )

  const post = props.data.post
  console.log("postdata", post)

  return (
    <BlogLayout noOverlap={true} title="Blog / Post">
      <SEO title={"Post: " + post.title} />

      <PostWrapper>
          <FeaturedImage post={post} />
    
          <ContainerPadded>
              <PostContainer>
                <div css={tw`flex flex-wrap items-center mb-2`}>
                  {post.tags.map((tag, index) => (
                    <PostTag key={index}>
                      <Link to={`/tag/${tag.slug}`}>{ucfirst(tag.title)}</Link>
                    </PostTag>
                  ))}
                  <span css={tw`text-gray-600 -ml-1 mr-2 hidden md:block`}>
                    <MdFiberManualRecord css={tw`w-2`} />
                  </span>
                  <span css={tw`text-gray-600 text-xs w-full md:w-auto`}>{post.readingTime} read</span>
                </div>
        
                <PostTitle>{post.title}</PostTitle>
        
                <div css={tw`flex flex-wrap items-center mb-10`}>
                  <PostProfileImage />
                  <span css={tw`text-gray-700 font-medium text-sm mr-2`}>
                    Seb Toombs
                  </span>
                  <span css={tw`text-gray-500 text-sm`}>
                    posted on {post.created_at}
                  </span>
                </div>
        
                <PostContent
                  dangerouslySetInnerHTML={{ __html: post.childMarkdownRemark.html }}
                />
              </PostContainer>
          </ContainerPadded>
      </PostWrapper>
    </BlogLayout>
  )
}

export default Post

export const query = graphql`
fragment postDate on StrapiPost {
  created_at(formatString: "MMMM D, YYYY")
  publishedDate(formatString: "MMMM D, YYYY")
}
fragment postFeaturedImage on StrapiPost {
  featuredImage {
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
}
fragment postTags on StrapiPost {
  tags {
    title
    slug
  }
}
fragment blogPostData on StrapiPost {
  id
  ...postDate
  title
  strapiId
  slug
  excerpt
  ...postFeaturedImage
  ...postTags
  readingTime
}
  fragment allPostData on StrapiPost {
    id
    strapiId
    updated_at
    ...postDate
    content
    childMarkdownRemark {
      html
    }
    title
    id
    ...postFeaturedImage
    excerpt
    readingTime
    seoDescription
    seoTitle
    strapiId
    slug
    ...postTags
  }

  query currentPost($id: Int!) {
    post: strapiPost(strapiId: { eq: $id }) {
      ...allPostData
    }
  }
`
