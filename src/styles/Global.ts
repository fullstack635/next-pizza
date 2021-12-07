import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
html,
body {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    color: ${(props) => props.theme.palette.text.primary};
    background-color: ${(props) => props.theme.palette.background.default};
    font-family: ${(props) => props.theme.fonts.main};
    scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: inherit;
    font-family: inherit;
    font-weight: 400;
    font-size: 1rem;
    background: ${(props) => props.theme.palette.background.default} none repeat scroll 0% 0%;
}
`