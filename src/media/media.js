import { css } from 'styled-components'
const sizes = {
   desktop: 1025,
   laptop: 760,
   tablet: 500
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (min-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})
