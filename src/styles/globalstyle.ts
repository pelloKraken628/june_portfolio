import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  font-family:"","sans-serif";
  font-weight:400;
  line-height:1.5;
  background-color:#4F5257; // theme secondary light
  color:#FFF;
}
* {
  box-sizing: border-box;
  margin:0;
}
h1 {

}
a {
  text-decoration: none;
  font-family: "Montserrat", "sans-serif";
  font-weight: 500;
}

`