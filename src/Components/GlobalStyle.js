
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
nav,
footer,
header,
aside {
  display: block;
}
html,
body {
  font-family:Roboto, sans-serif;
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 24px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  max-width:100%;
  height:auto;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family:Pacifico;
  font-size: inherit;
  font-weight: 400;
}
`;