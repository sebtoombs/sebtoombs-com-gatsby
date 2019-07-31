import styled from "styled-components";
import tw from "tailwind.macro";
import React from "react";
import mediaSizes from '../../utils/media-sizes'

import EventEmitterInstance from '../../utils/eventEmitter'

const SearchWrapper = styled.div`${tw`text-right flex items-center md:order-7`} ${mediaSizes.md`width: 30%;`}`
const SearchButton = styled.button`${tw`px-2 py-1 text-gray-400 uppercase ml-auto`}`
const SearchInner = styled.span`${tw`block flex items-center`}
svg { ${tw`block w-4 h-auto md:mr-2`}  } 
`
const SearchText = styled.span`${tw`hidden md:block`}`

const Search = (props) => {
    return (
        <SearchWrapper>
            <SearchButton onClick={() => {EventEmitterInstance.trigger('search','toggle')}}>
                <SearchInner>

                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Blog" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Desktop-HD" transform="translate(-1020.000000, -282.000000)" fill="#CECBCF" fillRule="nonzero">
                                <g id="Group-Copy-3" transform="translate(1020.000000, 282.000000)">
                                    <g id="fa-search">
                                        <path d="M23.8347737,21.9786143 L18.1444265,16.2882672 C18.0366193,16.1804599 17.8960012,16.1242127 17.7460085,16.1242127 L17.1272887,16.1242127 C18.6037791,14.4133587 19.4990479,12.1869049 19.4990479,9.74952395 C19.4990479,4.36384942 15.1351985,0 9.74952395,0 C4.36384942,0 0,4.36384942 0,9.74952395 C0,15.1351985 4.36384942,19.4990479 9.74952395,19.4990479 C12.1869049,19.4990479 14.4133587,18.6037791 16.1242127,17.1272887 L16.1242127,17.7460085 C16.1242127,17.8960012 16.1851472,18.0366193 16.2882672,18.1444265 L21.9786143,23.8347737 C22.1989161,24.0550754 22.5551487,24.0550754 22.7754504,23.8347737 L23.8347737,22.7754504 C24.0550754,22.5551487 24.0550754,22.1989161 23.8347737,21.9786143 Z M9.77777778,17.3333333 C5.60333333,17.3333333 2.22222222,13.9522222 2.22222222,9.77777778 C2.22222222,5.60333333 5.60333333,2.22222222 9.77777778,2.22222222 C13.9522222,2.22222222 17.3333333,5.60333333 17.3333333,9.77777778 C17.3333333,13.9522222 13.9522222,17.3333333 9.77777778,17.3333333 Z" id="Shape"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <SearchText>
                        Search
                    </SearchText>

                </SearchInner>
            </SearchButton>
        </SearchWrapper>
    )
}

export default Search;
