import React from "react"
import styled from "styled-components";
import tw from "tailwind.macro";
import {graphql, Link} from "gatsby";
import Img from "gatsby-image"
import ucfirst from '../utils/ucfirst'

import BlogLayout from "../layouts/blog"
import SEO from "../components/seo"
import Card, {CardWithImage, CardBody, CardFooter} from "../components/card";
import {MdFiberManualRecord} from 'react-icons/md'
import FeaturedImage from "../components/FeaturedImage";
import { ContainerPadded } from "../components/container";

import forEach from 'lodash/forEach'
import differenceBy from 'lodash/differenceBy'

import {BlogRow, BlogCol, BlogColLg, BlogCategoryHeader, BlogCategoryTitle, BlogCategoryViewAll} from '../components/blog/blog'

import BlogPostMeta from '../components/blog/BlogPostMeta'
import BlogPostTags from '../components/blog/BlogPostTags'

const BlogPostExcerpt = styled.p`${tw`text-gray-700 text-base`}`

const BlogPostTitle = styled.h2`${tw`font-bold text-2xl mb-2`}`

const BlogPage = (props) => {

    const posts = props.data && props.data.posts && props.data.posts.edges ? props.data.posts.edges : false
    const tags = props.data && props.data.tags && props.data.tags.edges ? props.data.tags.edges : false

    //Data gets removed from these as we go on
    let feedPosts = posts.map(({post})=>post)
    let feedTags = tags.map(({tag})=>tag)

    /**
     * Get a tag object by it's slug
     * @param {*} tagSlug 
     */
    const getTagBySlug = (tagSlug) => {
        let foundTag = null
        forEach(feedTags, (tag)=>{
            console.log('TAG', tag)
            if(tag.slug === tagSlug) {
                foundTag = tag
                return false
            }
        })
        return foundTag;
    }

    /**
     * deprecated
     */
    const postHasTag = (post, tagSlug) => {
        return post.tags.reduce((hasTag, tag)=>{
            return hasTag = hasTag || tag.slug === tagSlug
        }, false)
    }

    /**
     * Get posts by their primary tag
     */
    const getPostsByPrimaryTag = (tagSlug) => {
        return feedPosts.filter((post)=> {
            //return postHasTag(post, tagSlug)
            return post.tags[0].slug === tagSlug
        })
    }

    const removePostsFromList = (posts) => {
        feedPosts = differenceBy(feedPosts, posts, 'slug')
    }
    const removeTagFromList = (tag) => {
        feedTags = differenceBy(feedTags, [tag], 'slug')
    }


    const featuredPost = posts[0].post;
    removePostsFromList([featuredPost])

    const tag1 = getTagBySlug('user-experience')
    removeTagFromList(tag1)
    const tag1Posts = getPostsByPrimaryTag(tag1.slug)
    removePostsFromList(tag1Posts)

    const tag2 = getTagBySlug('web-development')
    removeTagFromList(tag2)
    const tag2Posts = getPostsByPrimaryTag(tag2.slug)
    removePostsFromList(tag2Posts)

    const tag3 = getTagBySlug('analytics')
    removeTagFromList(tag3)
    const tag3Posts = getPostsByPrimaryTag(tag3.slug)
    removePostsFromList(tag3Posts)

    const renderBlogCategory = (tag, tagPosts, args) => {

        const wrapInCols = args.wrapInCols || false

        const maybeWrapInCol = (wrap, key, children) => {
            if(wrap) return (<BlogCol key={'col'+key}>{children}</BlogCol>)
            return children
        }

        const items = tagPosts.map((post) => {
            if(post.id === featuredPost.id) return;
            return maybeWrapInCol(wrapInCols, post.slug, <CardWithImage key={'card'+post.slug} image={(<FeaturedImage post={post} link={true} size="large"/>)}>
                <CardBody>
                    <BlogPostMeta post={post}/>

                    <BlogPostTitle><Link to={`/blog/${post.slug}`}>{post.title}</Link></BlogPostTitle>
                    <BlogPostExcerpt>
                        {post.excerpt}
                    </BlogPostExcerpt>
                </CardBody>
                <CardFooter>
                    <BlogPostTags post={post}/>
                </CardFooter>
            </CardWithImage>)
        })

        return items;
    }

    return (
        <BlogLayout>
            <SEO title="Blog" />

            <ContainerPadded>
                {/* Featured Card */}
                {featuredPost ?
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
                : null}
    
    
                <BlogCategoryHeader>
                    <BlogCategoryTitle>{tag1.title}</BlogCategoryTitle>
                    <div>
                        <BlogCategoryViewAll as={Link} to={`/tag/${tag1.slug}`}>View all</BlogCategoryViewAll>
                    </div>
                </BlogCategoryHeader>
    
    
                <BlogRow>
                    {renderBlogCategory(tag1, tag1Posts, {wrapInCols: true})}
                </BlogRow>
    
    
    
                <BlogRow>
                    <BlogColLg>
                        <BlogCategoryHeader>
                            <BlogCategoryTitle>{tag2.title}</BlogCategoryTitle>
                            <div>
                                <BlogCategoryViewAll as={Link} to={`/tag/${tag2.slug}`}>View all</BlogCategoryViewAll>
                            </div>
                        </BlogCategoryHeader>

                        {tag2Posts.map((post) => (
                            <CardWithImage key={post.slug} image={(<FeaturedImage post={post} link={true} size="large"/>)} horizontal={true} wide={true}>
                                <CardBody>
                                    <BlogPostMeta post={post}/>
            
                                    <BlogPostTitle><Link to={`/blog/${post.slug}`}>{post.title}</Link></BlogPostTitle>
                                </CardBody>
                                <CardFooter>
                                <BlogPostTags post={post}/>
                                </CardFooter>
                            </CardWithImage>
                        ))}
    
                    </BlogColLg>
                    <BlogColLg>
                        <BlogCategoryHeader>
                            <BlogCategoryTitle>{tag3.title}</BlogCategoryTitle>
                            <div>
                                <BlogCategoryViewAll as={Link} to={`/tag/${tag3.slug}`}>View all</BlogCategoryViewAll>
                            </div>
                        </BlogCategoryHeader>

                        {tag3Posts.map((post) => (
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
    
                    </BlogColLg>
                </BlogRow>



                {feedTags.map(tag=>{
                    const tagPosts = getPostsByPrimaryTag(tag.slug)
                    if(!tagPosts) return null;
                    return(<>
                        <BlogCategoryHeader>
                            <BlogCategoryTitle>{tag.title}</BlogCategoryTitle>
                            <div>
                                <BlogCategoryViewAll as={Link} to={`/tag/${tag.slug}`}>View all</BlogCategoryViewAll>
                            </div>
                        </BlogCategoryHeader>
            
            
                        <BlogRow>
                            {renderBlogCategory(tag, tagPosts, {wrapInCols: true})}
                        </BlogRow>
                    </>)
                })}


            </ContainerPadded>

        </BlogLayout>
    )
}


export default BlogPage


export const query = graphql`query blogPage {
    posts: allSanityPost(sort: {fields: publishedAt, order: DESC}, limit: 30) {
        edges {
            node {
                ...allPostData
            }
        }
    }
    tags: allSanityCategory {
        edges {
            tag: node {
                title
                slug {
                    current
                }
            }
        }
    }
}`