import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html { 
    font-size: 100%; 
  }
  body {
    background: #F5F5F5;
    overflow-x: hidden;
    line-height: 1.4;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1em;
    color: #333;
    -ms-overflow-style: none;
    &::-webkit-scrollbar { 
      display: none !important; 
    }
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 900;
    src: url("/fonts/NotoSansKR-Black.otf") format("truetype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 700;
    src: url("/fonts/NotoSansKR-Bold.otf") format("truetype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 500;
    src: url("/fonts/NotoSansKR-Medium.otf") format("truetype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 400;
    src: url("/fonts/NotoSansKR-Regular.otf") format("truetype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 300;
    src: url("/fonts/NotoSansKR-Light.otf") format("truetype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 100;
    src: url("/fonts/NotoSansKR-Thin.otf") format("truetype");
  }
  @media (min-width: 300px) {
    html { font-size: 60%; }
  }
  @media (min-width: 500px) {
    html { font-size: 75%; }
  }
  @media (min-width: 700px) {
    html { font-size: 90%; }
  }
  @media (min-width: 1200px) {
    html { font-size: 100%; }
  }
`

export default GlobalStyle
