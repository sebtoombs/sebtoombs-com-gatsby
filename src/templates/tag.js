import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import { graphql, Link } from "gatsby"

import BlogLayout from "../layouts/blog"
import SEO from "../components/seo"
import { ContainerPadded } from "../components/container";
import Card, {CardWithImage, CardBody, CardFooter} from "../components/card";
import {BlogRow, BlogCol} from '../components/blog/blog'
import BlogPostMeta from '../components/blog/BlogPostMeta'
import FeaturedImage from "../components/FeaturedImage";

const Tag = props => {
  if (!(props.data && props.data.tag))
    return (
      <p>
        <strong>Tag data missing!</strong>
      </p>
    )

  const tag = props.data.tag
  console.log(tag)

  return (
    <BlogLayout title="Blog / Tag">
      <SEO title={"Tag: " + tag.title} />

      <ContainerPadded>

        <BlogRow>
        {tag.posts.map(post=>(
            <BlogCol key={`col-${post.slug}`}>
                <CardWithImage image={(<FeaturedImage post={post} link={true} size="large"/>)}>
                    <CardBody>
                        <BlogPostMeta post={post}/>

                        <div css={tw`font-bold text-2xl mb-2`}><Link to={`/blog/${post.slug}`}>{post.title}</Link></div>
                        <p css={tw`text-gray-700 text-base`}>
                            {post.excerpt}
                        </p>
                    </CardBody>
                    <CardFooter></CardFooter>
                </CardWithImage>
            </BlogCol>
        ))}
        </BlogRow>
      </ContainerPadded>
    </BlogLayout>
  )
}

export default Tag

export const query = graphql`
  query currentTag($id: String!) {
    tag: sanityCategory(id: { eq: $id }) {
      title
      slug {
        current
      }
      posts {
          ...blogPostData
      }
    }
  }
`
