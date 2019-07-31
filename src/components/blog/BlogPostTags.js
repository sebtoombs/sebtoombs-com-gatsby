import React from 'react'
import {Link} from 'gatsby'
import ucfirst from '../../utils/ucfirst'
import tw from 'tailwind.macro'

const BlogPostTags = (props) => {
    return (
        <>
        {props.post.tags.map((tag,index)=>(
            <Link key={index} to={`/tag/${tag.slug}`}
               css={tw`mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-pink-300 mr-2`}>{ucfirst(tag.title)}</Link>
        ))}
        </>
    )
}
export default BlogPostTags