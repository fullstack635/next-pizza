import styled from "styled-components"

export const Header = styled.h1`
    width: 100%;
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-size: 24px;
    margin: 32px 0px;
`

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
`

export const Product = styled.article`
    display: flex;
    flex-flow: column nowrap;
    -moz-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 60px;
    cursor: pointer;
    width: 292px;
    margin-right: 37.3333px;
`

export const ProductInner = styled.main`
    margin: 0px;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    color: rgb(92, 99, 112);
    font-weight: 400;
`

export const ProductFooter = styled.footer`

`