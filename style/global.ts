import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-size: 10px;
    background: #F5F5F5;
  }
`

export default GlobalStyle
