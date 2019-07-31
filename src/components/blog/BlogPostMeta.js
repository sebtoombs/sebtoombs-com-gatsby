import React from 'react'
import tw from 'tailwind.macro'
import {MdFiberManualRecord} from 'react-icons/md'


const BlogPostMeta = (props) => {
    return (
        <div css={tw`flex flex-wrap items-center mb-2`}>
            <span css={tw`text-gray-600 text-xs w-full md:w-auto`}>{props.post.readingTime}</span>
            <span css={tw`text-gray-600 mx-2 hidden md:block`}><MdFiberManualRecord css={tw`w-2`}/></span>
            <div css={tw`text-gray-700 text-sm w-full md:w-auto`}>
                <span css={tw`font-medium`}>Seb Toombs</span> on {props.post.publishedDate || props.post.created_at}
            </div>
        </div>
    )
}
export default BlogPostMeta