import styled from "styled-components/macro"
import tw from "tailwind.macro"
import React from "react"

//const Container = styled.div`${tw`px-4`}`
const Container = props => {
  return (
    <div className="container" {...props} css={tw`mx-auto px-4`}>
      {props.children}
    </div>
  )
}
export default Container
