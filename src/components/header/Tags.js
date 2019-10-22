import styled from "styled-components";
import tw from "tailwind.macro";
import React from "react";
import mediaSizes from '../../utils/media-sizes'
import {MdMoreVert} from 'react-icons/md'
import { graphql, useStaticQuery, Link } from "gatsby";

const TagsWrapper = styled.div`${tw`w-full md:order-6`} ${mediaSizes.md`width: 70%;`}`
const TagsList = styled.ul`${tw`overflow-x-auto overflow-y-hidden whitespace-no-wrap relative flex items-center`}
&::-webkit-scrollbar { width: 0 !important }  overflow: -moz-scrollbars-none; -ms-overflow-style: none;`
const TagsLi = styled.li`${tw`inline-block mx-4 lg:mx-6 text-center`} &:first-child { ${tw`ml-0`} }   &:last-child { ${tw`mr-0`} }`

const IconWrapper = styled.span`${tw`inline-flex self-center`} svg { ${tw`inline relative`} width: 1em; height: 1em; top: 0.125em;  }`

const Tags = (props) => {

    const data = useStaticQuery(graphql`{
        tags: allSanityCategory {
            edges {
                node {
                    title
                    slug {
                        current
                    }
                }
            }
        }
    }`)
    const tags = data.tags.edges.map(({node})=>node)

    const showTags = tags.length>4 ? tags.slice(0, 3) : tags
    const moreTags = tags.length>4 ? tags.slice(4) : null

    return (
        <TagsWrapper>
            <TagsList>
                {showTags.map(tag=>(
                    <TagsLi key={tag.slug}><Tag as={Link} to={`/tag/${tag.slug}`}>{tag.title}</Tag></TagsLi>
                ))}
                {moreTags ? <TagsLi><Tag><IconWrapper><MdMoreVert/></IconWrapper> More</Tag></TagsLi> : null}
            </TagsList>
        </TagsWrapper>
    )
}

export default Tags;



const TagStyled = styled.a`${tw`text-gray-400 block text-sm md:text-base hover:text-white`}`

const Tag = (props) => {
    return (
        <TagStyled {...props}>{props.children}</TagStyled>
    )
}
