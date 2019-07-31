import styled from "styled-components";
import tw from "tailwind.macro";

const BlogRow = styled.div`${tw`flex flex-wrap -mx-4`}`
const BlogCol = styled.div`${tw`w-full md:w-1/2 px-4`}`
const BlogColLg = styled(BlogCol)`${tw`md:w-full lg:w-1/2`}`

const BlogCategoryHeader = styled.div`${tw`flex flex-wrap items-baseline mb-4 mt-16`}`
const BlogCategoryTitle = styled.span`flex-grow:1; ${tw`text-2xl`}`
const BlogCategoryViewAll = styled.a`${tw`text-pink-300 border-b border-pink-300`}`

export {BlogRow, BlogCol, BlogColLg, BlogCategoryHeader, BlogCategoryTitle, BlogCategoryViewAll}