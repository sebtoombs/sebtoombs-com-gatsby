import React from "react"
import styled from "styled-components/macro"
import tw from "tailwind.macro"

const BackgroundStyled = styled.div`
  ${tw`absolute left-0 top-0 w-full h-full overflow-hidden`}
  svg {
    ${tw`w-full h-auto overflow-visible`}
  }

  .vector1,
  .vector2 {
    transform-origin: top center;
    opacity: 1;
  }

  .vector1 {
    animation: vector1 1s forwards;
  }
  .vector2 {
    animation: vector2 1.2s forwards;
    transform: scale(0.9, 0.9);
  }

  @keyframes vector1 {
    0% {
      transform: scale (1, 1);
      opacity: 0;
    }
    20% {
      transform: scale (0.6, 0.5);
      opacity: 1;
    }
    80% {
      transform: scale(1, 1.03);
      opacity: 1;
    }
    85% {
      transform: scale(1, 1.02);
    }
    95% {
      transform: scale(1, 1, 01);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes vector2 {
    0% {
      transform: scale (0, 0.9);
      opacity: 0;
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
`

const Background2 = props => {
  return (
    <BackgroundStyled>
      <svg
        width="1440"
        height="329"
        viewBox="0 0 1440 329"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="vector2"
          d="M1009 118C1264.17 74.7508 1304.5 55.0001 1645 -37H-17.5C303 141.5 345.5 301 448.5 301C551.5 301 586.5 148 706 112.5C825.5 77.0001 891 138 1009 118Z"
          fill="#F7FAFC"
        />
        <path
          className="vector1"
          d="M870.5 134.5C1125.67 91.2508 1162 83.0001 1502.5 -9H-160C160.5 169.5 203 329 306 329C409 329 444 176 563.5 140.5C683 105 752.5 154.5 870.5 134.5Z"
          fill="#EBF4FF"
        />
      </svg>
    </BackgroundStyled>
  )
}

export default Background2
