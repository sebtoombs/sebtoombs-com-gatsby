import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import MenuToggle from "../components/header/menuToggle"
import Brand from "../components/header/Brand"
import HeaderNav from "../components/header/HeaderNav"
import HeaderBreak from "../components/header/Break"
import Footer from "../components/footer"
import OverlayNav from "../components/overlay-nav"
import OverlaySearch from "../components/overlay-search"
import { HomeProfileImage } from "../components/ProfileImage"
import { ContainerPadded, ContainerReading } from "../components/container"

import { Button } from "../components/Button"
import Heading from "../components/Heading"
import P from "../components/Paragraph"

import { CardWithImage, CardBody, CardFooter } from "../components/card"
import FeaturedImage from "../components/FeaturedImage"
import BlogPostMeta from "../components/blog/BlogPostMeta"
import BlogPostTags from "../components/blog/BlogPostTags"
import { MdFiberManualRecord } from "react-icons/md"
const BlogPostExcerpt = styled.p`
    ${tw`text-gray-700 text-base`}
`
const BlogPostTitle = styled.h2`
    ${tw`font-bold text-2xl mb-2`}
`

const HomeHero = styled.div`
    ${tw`px-10 max-w-2xl mx-auto`}
`
const HomeHeroHeading = styled.span`
    ${tw`block text-white text-3xl md:text-4xl mb-6`}
`
const HomeHeroText = styled.span`
    ${tw`block text-white text-lg md:text-xl mb-4`}
`

const IndexPage = props => {
    /*const posts =
        props.data && props.data.posts && props.data.posts.edges
            ? props.data.posts.edges
            : false
    const featuredPost = posts.shift().post
    console.log(featuredPost)

    const homePagePosts = posts
        .slice(0, posts.length >= 2 ? 2 : posts.length)
        .map(p => p.post)*/

    return (
        <>
            <SEO title="Home" />
            <Header svg={true}>
                <MenuToggle />
                <Brand />
                <HeaderNav />

                <HeaderBreak css={tw`order-4`} />

                <div css={tw`order-5 w-full`}>
                    <HomeHero>
                        <HomeProfileImage />
                        <HomeHeroHeading>
                            I make websites better.
                        </HomeHeroHeading>
                        {/*<HomeHeroText>Chuck meatloaf kielbasa shank brisket venison ham. Cupim andouille tongue ground round corned beef porchetta venison, beef tenderloin chicken bacon shankle sirloin.</HomeHeroText>*/}
                    </HomeHero>
                </div>
            </Header>

            <main>
                <ContainerReading>
                    <Heading size={1} as={"h1"}>
                        Hi, I'm Seb
                    </Heading>
                    <Heading size={2} as={"h2"}>
                        I'm a web developer with a particular focus on user
                        experience, performance, and conversion rate
                        optimisation.
                    </Heading>
                    <Heading size={4} as={"h3"}>
                        What do I do?
                    </Heading>
                    <P>
                        Great question! The most general way I usually describe
                        it is: I make websites better. This includes quite a lot
                        of things, and of course I also make websites as well as
                        making them better.
                    </P>
                    <Heading size={4} as={"h3"}>
                        How do I do it?
                    </Heading>
                    <P>
                        I work on making <i>user experiences</i>, in online
                        &amp; digital platforms, better by taking a user-centric
                        approach to design.
                    </P>
                    <P>
                        A slightly less complicated way to say this might be
                        that I try to think about what the user wants, and see
                        how we can go about making their experience as
                        frictionless as possible.
                    </P>
                    <P>
                        A lot of what I do involves making websites as fast as
                        possible - even Wordpress websites.
                    </P>
                </ContainerReading>

                {/*<div css={tw`bg-gray-200`}>
          <ContainerReading>
            <Heading size={1} as={`h2`} css={tw`text-center`} light={true}><Link to="/blog">Blog</Link></Heading>
            <Heading size={5} css={tw`lg:text-center`}>I have opinions. You can read them!</Heading>

            <div css={tw`mb-8`}></div>

            <CardWithImage image={(<FeaturedImage post={featuredPost} link={true} size="large"/>)} horizontal={true}>
                <CardBody>
                    <BlogPostMeta post={featuredPost}/>
  
                    <BlogPostTitle><Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link></BlogPostTitle>
                    <BlogPostExcerpt>
                        {featuredPost.excerpt}
                    </BlogPostExcerpt>
                </CardBody>
                <CardFooter>
                    <BlogPostTags post={featuredPost}/>
                </CardFooter>
              </CardWithImage>

              {homePagePosts.map(post=>(
                <CardWithImage key={post.slug} image={(<FeaturedImage post={post} link={true} size="large"/>)} horizontal={true} xwide={true}>
                  <CardBody>
                      <div css={tw`flex flex-wrap items-center mb-2`}>
                          <a href={`/tag/${post.tags[0].slug}`}
                          css={tw`inline-block text-sm text-pink-300`}>{post.tags[0].title}</a>
                          <span css={tw`text-gray-600 mx-2`}><MdFiberManualRecord css={tw`w-2`}/></span>
                          <span css={tw`text-gray-600 text-xs`}>{post.readingTime}</span>
                      </div>
                      <div css={tw`font-bold text-xl`}><Link to={`/blog/${post.slug}`}>{post.title}</Link></div>
                  </CardBody>
                </CardWithImage>
              ))}

              <div css={tw`text-center py-4`}>
                <Button color="primary" outline="true" as={Link} to={`/blog`}>Read more of my opinions</Button>
              </div>


          </ContainerReading>
        </div>*/}
                <div css={tw`bg-gray-200 p-20`}>
                    <ContainerReading>
                        <h2 css={tw`text-4xl mb-4`}>Hire Me</h2>
                        <div css={tw`flex flex-wrap -mx-2`}>
                            <div css={tw`w-full md:w-1/2 px-2`}>
                                <P>Need a developer?</P>
                                <P>
                                    You can hire me through the agency I work
                                    for:{" "}
                                    <a
                                        href="https://www.kingsdesign.com.au"
                                        rel="nofollow"
                                        target="_blank"
                                        css={tw`text-pink-300`}
                                    >
                                        kingsdesign.com.au
                                    </a>
                                </P>
                            </div>
                            <div css={tw`w-full md:w-1/2 px-2 text-right`}>
                                <P>
                                    <a
                                        href="tel:0439567593"
                                        css={tw`text-purple-600`}
                                    >
                                        0439 567 593
                                    </a>
                                </P>
                                <P>
                                    <a
                                        href="mailto:seb@sebtoombs.com"
                                        css={tw`text-purple-600`}
                                    >
                                        seb@sebtoombs.com
                                    </a>
                                </P>
                                <P>
                                    <a
                                        href="https://twitter.com/baffledbasti"
                                        css={tw`text-purple-600`}
                                    >
                                        @sebtoombs
                                    </a>
                                </P>
                            </div>
                        </div>
                    </ContainerReading>
                </div>
            </main>

            <Footer />
            <OverlayNav />
            <OverlaySearch />
        </>
    )
}

export default IndexPage

export const query = graphql`
    query indexPage {
        posts: allSanityPost(
            sort: { fields: publishedAt, order: DESC }
            limit: 30
        ) {
            edges {
                post: node {
                    ...allPostData
                }
            }
        }
    }
`
