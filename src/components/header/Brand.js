import styled from "styled-components";
import tw from "tailwind.macro";
import {Link} from "gatsby";
import React from "react";

const BrandLink = styled.a`${tw`hidden md:block md:order-first`}`
const BrandText = styled.span`${tw`text-white text-2xl`}`

const Brand = () => {
    return (
        <BrandLink as={Link} to={"/"}>
            <BrandText>Seb Toombs</BrandText>
        </BrandLink>
    )
}

export default Brand