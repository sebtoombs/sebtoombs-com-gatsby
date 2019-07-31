import styled from "styled-components";
import tw from "tailwind.macro";
import React from "react";

const CardLinkWrapper = styled.a`${tw`block`}`
const CardStyled = styled.div`${tw`block rounded overflow-hidden shadow-lg hover:shadow-xl mb-4 transition-shadow bg-white`}`

const Card = (props) => {

    function renderCard() {
        return (
            <CardStyled {...props}>
                {props.children}
            </CardStyled>
        )
    }

    if(props.link) return (<CardLinkWrapper href={props.link}>{renderCard()}</CardLinkWrapper>);

    return renderCard();
}
export default Card

const CardBody = styled.div`${tw`px-6 py-4`} flex-grow: 1;`;
export {CardBody}

const CardFooter = styled.div`${tw`px-6 pb-4`}`
export {CardFooter}

const CardContent = styled.div`${tw`flex flex-col`}`
export {CardContent}






const cardImageWrapperProps = (props) => {
    if(props.horizontal && props.wide) return tw`md:w-1/3`
    if(props.horizontal && props.xwide) return tw`w-1/4`
    if(props.horizontal) return tw`md:w-1/2`
    return ''
}
const cardWithImageContentProps = (props) => {
    if(props.horizontal && props.wide) return tw`md:w-2/3`
    if(props.horizontal && props.xwide) return tw`w-3/4`
    if(props.horizontal) return tw`md:w-1/2`
    return ''
}

const CardWithImageStyled = styled(Card)`${tw`flex flex-wrap`}`
const CardImageWrapper = styled.div`${tw`w-full`} ${cardImageWrapperProps}
img { ${tw`w-full`} } .gatsby-image-wrapper {${tw`w-full h-full`}`
const CardWithImageContent = styled(CardContent)`${tw`w-full`} ${cardWithImageContentProps}`

const CardWithImage = (props) => {
    return (
        <CardWithImageStyled {...props}>
            <CardImageWrapper horizontal={props.horizontal} wide={props.wide} xwide={props.xwide}>
                {props.image}
            </CardImageWrapper>
            <CardWithImageContent horizontal={props.horizontal} wide={props.wide} xwide={props.xwide}>
                {props.children}
            </CardWithImageContent>
        </CardWithImageStyled>
    )
}
export {CardWithImage}