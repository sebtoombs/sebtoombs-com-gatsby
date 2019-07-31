import React from "react"
import styled from "styled-components";
import tw from "tailwind.macro";
import {CardBody, CardFooter, CardWithImage} from "./card";

const BlogCard = (props) => {
    return (
        <CardWithImage image={linkedImage()} horizontal={true}>
            <CardBody>
                <span css={tw`text-gray-600 text-xs`}>11 min read</span>
                <div css={tw`font-bold text-2xl mb-2`}><a href="#">The Coldest Sunset</a></div>
                <p css={tw`text-gray-700 text-base`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                    perferendis eaque, exercitationem praesentium nihil.
                </p>
            </CardBody>
            <CardFooter>
                <div css={tw`text-gray-700 text-sm`}>
                    <span css={tw`font-medium`}>Seb Toombs</span> on July 10, 2019
                </div>
                <a href={"#"}><span
                    css={tw`mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-pink-300 mr-2`}>#photography</span></a>
                <a href={"#"}
                   css={tw`mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-pink-300 mr-2`}>#travel</a>
                <span
                    css={tw`mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-pink-300`}>#winter</span>
            </CardFooter>
        </CardWithImage>
    )
}
export default BlogCard