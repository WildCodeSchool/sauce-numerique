import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap');;

*,
*::after,
*::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
}

body {
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
}
`;

export default GlobalStyles;
