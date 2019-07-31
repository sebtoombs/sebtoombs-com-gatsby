import React from 'react'
import styled from "styled-components"
import tw from "tailwind.macro"

import mediaSizes from '../utils/media-sizes';

const ContainerStyled = styled.div`
${tw`ml-auto mr-auto`}

${mediaSizes.sm`max-width: 640px`}
${mediaSizes.md`max-width: 768px`}
${mediaSizes.lg`max-width: 1024px`}
${mediaSizes.xl`max-width: 1280px`}
`;


const Container = (props) => {
    return (
        <ContainerStyled className={props.className} {...props}>
            {props.children}
        </ContainerStyled>
    )
}

export default Container


const ContainerPadded = styled(Container)`${tw`px-4 md:px-8`}`
export {ContainerPadded}