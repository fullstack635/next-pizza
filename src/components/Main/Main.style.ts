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
    margin-right: 20px;
`

export const ProductInner = styled.main`
    margin: 0px;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    color: rgb(92, 99, 112);
    font-weight: 400;
`

export const ProductPicture = styled.picture`
    margin: 0px;
    position: relative;
    width: 100%;
    border-radius: 12px;
    top: 0px;
    transition: top 150ms ease-out 0s;
    user-select: none;
    image-rendering: auto;
    display: flex;
    flex-flow: column nowrap;
`
export const ProductImage = styled.img`
    width: 95%;
    margin-left: 5%;
    object-fit: contain;
    image-rendering: auto;
`
export const ProductName = styled.div`
    margin: 8px 0px;
    color: rgb(0, 0, 0);
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
`

export const ProductFooter = styled.footer`
    margin-top: 16px;
    display: flex;
    cursor: pointer;
`

export const InnerFooter = styled.div`
    flex: 1 1 auto;
    padding-right: 4px;
    font-size: 22px;
    font-weight: 500;
    line-height: 42px;
    display: flex;
    justify-content: space-between;
`

export const MoneyContainer = styled.span`
    white-space: nowrap;
`

export const MoneyValue = styled.span`

`

export const MoneyCurrency = styled.span`
    margin-left: -2px;
`

export const Button = styled.button`
    align-self: flex-end;
    flex: 0 0 auto;
    height: 40px;
    min-width: 120px;
    padding: 8px 20px;
    font-size: 16px;
    line-height: 24px;
    background-color: rgb(255, 240, 230);
    color: rgb(209, 87, 0);
    outline: currentcolor none medium;
    border: medium none;
    border-radius: 9999px;
    text-align: center;
    font-weight: 500;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    transition-property: background-color, color;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    &:hover {
        background-color: rgb(255, 240, 200);
    }
`