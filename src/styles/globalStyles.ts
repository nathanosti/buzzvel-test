import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline-offset: -2px;
    outline-color: ${theme.colors.white};
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: "Roboto", sans-serif;
    overflow: hidden;
    user-select: none;
  }
`

export default GlobalStyle
