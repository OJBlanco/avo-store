import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  #__next {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  #__next > main {
    margin: 1rem auto 0;
    max-width: 80ch;
  }
`
