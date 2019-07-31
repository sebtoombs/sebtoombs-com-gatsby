import {css} from 'styled-components';


const config = require('./tailwind-config');

const sizes = config.theme.screens;

export {sizes};

// Iterate through the sizes and create a media template
const mediaSizes = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `

    return acc
}, {});

export default mediaSizes;