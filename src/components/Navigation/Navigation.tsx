import React from 'react'
import styled from 'styled-components'

export default function Navigation(): JSX.Element {
    return (
        <NNavigation>
            <NavInner>
                <LogoContainer>
                    <Logo x="0" y="0" viewBox="0 0 70 70">
                        <path d="M32.6 3c18.6 0 32.9 12.8 32.9 31.8C65.5 53.9 51.2 67 32.6 67H11.7C7.5 67 4 64.2 4 59.3V11c0-4.9 3.5-8 7.7-8h20.9z" fill="#ff6900"></path><path d="M54 27.9c-.1.8-1 .8-1.4.1-1.3-2.2-3-2.6-5.7-2.8-2-.1-4.4.1-6.6.1-.4 0-.5-.3-.5-.4.4-1.9 2-5.4 3.7-5.7.8-.1 2.6-.3 3.6-.3 4.6 0 7.1 5.3 6.9 9M28 46c2.9.8 7 1.3 10.4 1 5.9-.4 10.4-2.6 12.9-4.2-1.5 3.8-7.2 6.2-12.6 6.8 0 .3-.1.5-.1.8 4.1-.2 8-1.6 9.8-2.8-1 3.7-6 5.2-10.6 5.5-.1.3-.3.6-.4.8 2.7 0 5.2-.4 6.7-.9-2.1 3.9-11.1 6.6-18.7 3 1.7-3.4 2.5-6.8 2.6-10m25.1-26.6c-1.8-1.7-4.2-2.5-6.3-2.4-3 0-5.5.8-9.2.9-2.5.1-4.8-5.4-7.8-6.1-1.3-2.9-4.3-3.3-6.1-1.8-1.7-1-4.3-.5-4.4 1.4-1.9-.6-4.4.4-3.3 3-4.7.1-5.5 4.3-2.4 4.7-4.1 2.3-2.2 6.3 1.2 5.5.6 6 3.3 13.8-1.1 15.7-.5.2-2.5.7-6.3-.2-1.1-.3-2.3-.6-3.4-.9v3.1c3.3.8 6.6 1.4 8.7 1.2 5.8-.6 6.1-5.4 5.8-9.6-.3-4.1-1.7-8.9-1.2-12.3l-.2-.2c-2.1 2.2-3.5 1.6-3.7.9-.3-1.4 2.2-3.2 3.6-3.8 0-.1.1-.2.1-.3-1.3.2-2.9 0-3-.9-.1-1.1 2.2-2.2 5.2-1.9.1 0 .1-.1.2-.1l-.6-.3c-.8-.4-1-1.1-.7-1.5.3-.5 1.1-.7 1.8-.7 1.1 0 2 .3 2.7.6.1 0 .1-.1.2-.1-.2-.2-.5-.4-.6-.6-.2-.3-.2-.8.1-1 .4-.3 1.5-.4 2.4.4l.5.5c.1 0 .2 0 .3-.1-.2-.2-.3-.5-.3-.7-.1-.3 0-.7.4-.8s.9.1 1.2.5.5 1 .6 1.3c-2.1.2-4.6 1-6.1 3.1-1.5 2-2.1 5.2-1.2 8.2.6 3.1 1.8 6 2.9 9v.1c2.4 6.9 7 23.9-15.3 32.9.8.5 2.4.9 3.7.9h2.3c4.6-2.4 7.7-5.3 9.9-8.2 10.2 4.5 19.5 2.2 23.5-5.2 2.7-1.6 4.4-4.9 4.5-7.2 1.7-2.1 2-4.7 1.5-6.5-.1-.4-.5-.4-1.1-.1-8.3 5-15.6 5.8-24.3 3.2-.2-3.4-.9-6.3-1.2-8.1-.2-3.5.9-5.2 7.3-3.1 4.2 1.1 6.1 3 7.6 4 .7.5 1.6 1.1 2.1.7.3-.2.4-.8.4-1.5-.1-1.9-1-5.1-1.8-6.3 2.5-.1 4.6-.1 5.7 0 2.4.4 2.6 1.7 2.9 2.2.7 2 4.6 1.5 4.9-.2.6-3.5.8-8.1-2.6-11.3m-44.4 30c-1.6-.1-3.2-.1-4.7 0v2.1c2.7-.6 4.4-.9 4.4-.9l.3-1.2z"></path>
                        <path d="M33.7 27.5c-3.5-.8-7.4-1.8-9.4-4.8 0-.1-.1-.1-.2-.1s-.1.1-.1.1c0 .2 0 .3.1.5l-.3.1c-.5-.8-.7-1.7-.1-2.4.8-1 2.3-.9 3.3-.3l-.1.3c-.5-.1-1-.1-1.4.1-.3.2-.4.5-.2.8C27 25 32 25.7 37.9 25.2c.6 0 .7-.3.8-.6.5-2 1.4-3.9 2.8-5.3-1.1.2-2.1.2-2.9.2-3 .2-4.8-.2-5.3-.6l.1-.3c.3.1.7.1.7 0 .1-.1 0-.2-.1-.3-.6-.5-3.2-3.2-3.2-3.2-.3-2.3-3.6-2.3-4.9-.1l-.4-.1c.1-.5.3-.9.5-1.2-2.7.6-4.3 3.1-4.6 5.4-1.2 10.2 14.3 7.8 18.7 11.9.1.1.3.4.4.2.2-.2-1.8-2.6-6.8-3.7m-5.4-12.2c.7-.2 1.8.5 2.3 1.6.6 1.1.4 2.2-.3 2.5s-1.8-.5-2.3-1.6c-.1-.2-.1-.3-.2-.5h.1c.2.2.5.3.7.2.3-.2.2-.6 0-1-.2-.3-.5-.6-.8-.6l-.1-.1c.2-.3.4-.4.6-.5M51.3 42.8c-2.5 1.6-7 3.8-12.9 4.2-3.4.2-7.4-.2-10.4-1 0 1-.1 2-.3 3 1.7.4 4.6 1 8.9 1.1-.2 1.1-1.4 5.1-4.3 7.6 5.4.2 10.3-1.9 11.8-4.7-1.5.5-4.1 1-6.7.9.1-.3.3-.5.4-.8 4.6-.2 9.6-1.7 10.6-5.5-1.8 1.2-5.7 2.6-9.8 2.8 0-.3.1-.5.1-.8 5.4-.7 11.1-3 12.6-6.8" fill="#fff"></path>
                    </Logo>
                </LogoContainer>
                <List>
                    <ListItem>
                        <InnerLink>Пицца</InnerLink>
                    </ListItem>
                    <ListItem>
                        <InnerLink>Комбо</InnerLink>
                    </ListItem>
                    <ListItem>
                        <InnerLink>Закуски</InnerLink>
                    </ListItem>
                    <ListItem>
                        <InnerLink>Десерты</InnerLink>
                    </ListItem>
                    <ListItem>
                        <InnerLink>Напитки</InnerLink>
                    </ListItem>
                    <ListItem>
                        <InnerLink>Другие товары</InnerLink>
                    </ListItem>
                    <ListItem>
                        <InnerLink>Акции</InnerLink>
                    </ListItem>
                    <ListItem>
                        <InnerLink>Контакты</InnerLink>
                    </ListItem>
                    <ListItem>
                        <InnerLink>О нас</InnerLink>
                    </ListItem>
                    <ListItem>
                        <InnerLink>Работа в Додо</InnerLink>
                    </ListItem>
                </List>
                <Cart>
                    <CartButton>
                        Корзина
                        <Divider />
                        <CartQuantity>1</CartQuantity>
                        <CartSvg width="13" height="11" viewBox="0 0 13 11" fill="none">
                            <path d="M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </CartSvg>
                    </CartButton>
                </Cart>
            </NavInner>
        </NNavigation>
    )
}

const NNavigation = styled.nav`
    width: 100%;
    position: sticky;
    top: 0px;
    background-color: white;
    z-index: 10;
`

const NavInner = styled.div`
    position: relative;
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
`

const LogoContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    font-size: 0px;
    line-height: 0;
    position: relative;
    width: 52px;
    padding-right: 16px;
    height: 36px;
`

const Logo = styled.svg`
    transition: transform 0.25s ease 0s;
    transform: translateX(-52px);
`

const List = styled.ul`
    white-space: nowrap;
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: inline-block;
    vertical-align: middle;
    transition: transform 0.25s ease 0s;
    transform: translateX(-52px);
`

const ListItem = styled.li`
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    list-style: none;
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
    &:first-child {
        margin-left: 0px;
    }
`

const InnerLink = styled.a`
    display: inline-block;
    font-weight: 500;
    padding: 22px 0px;
    color: black;
    font-size: 14px;
    line-height: 1;
    transition: color 0.25s ease 0s, padding 0.25s ease 0s;
    text-decoration: none;
    cursor: pointer;
    outline: currentcolor none medium;
    &:hover {
        color: rgb(255, 105, 0);
    }
`

const Cart = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
    height: 100%;
`

const CartButton = styled.button`
    height: 40px;
    padding: 8px 20px;
    font-size: 16px;
    line-height: 24px;
    background-color: rgb(255, 105, 0);
    color: rgb(255, 255, 255);
    top: 9px;
    min-width: 90px;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    outline: currentcolor none medium;
    border: medium none;
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
    border-radius: 9999px;
`

const Divider = styled.div`
    height: 24px;
    width: 1px;
    margin: 0px 12px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    opacity: 0.4;
`

const CartQuantity = styled.div`
    transition: transform 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
    opacity: 1;
    transform: translateX(0px);
    display: inline-block;
    width: 14px;
    text-align: center;
    position: relative;
    left: -1px;
    font-size: 16px;
    line-height: 24px;
    &:hover {
        opacity: 0;
    }
`

const CartSvg = styled.svg`
    position: absolute;
    top: 14px;
    right: 16px;
    transition: transform 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
    opacity: 0;
    transform: translateX(-5px);
    display: inline-block;
    width: 14px;
    font-size: 16px;
    line-height: 24px;
    color: rgb(255, 255, 255);
    text-align: center;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`