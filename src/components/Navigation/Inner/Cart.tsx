import { observer } from 'mobx-react-lite';
import React from 'react'
import styled from 'styled-components'
import { useRootStore } from '../../../pages/_app'

const Cart = observer(() => {
    const state = useRootStore();
    return (
        <CCart onClick={() => state.UiStore.showCartModal()}>
            <CartButton>
                Корзина
                <Divider />
                <CartQuantity>1</CartQuantity>
                <CartSvg width="13" height="11" viewBox="0 0 13 11" fill="none">
                    <path d="M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </CartSvg>
            </CartButton>
        </CCart>
    )
});

export default Cart;

const CCart = styled.div`
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
    &:hover {
        background-color: rgb(236, 101, 4);
    }
    &:hover svg {
        opacity: 1;
        transform: translate(1px);
    }
    &:hover span {
        opacity: 0;
    }
`

const Divider = styled.div`
    height: 24px;
    width: 1px;
    margin: 0px 12px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    opacity: 0.4;
`

const CartQuantity = styled.span`
    transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s;
    opacity: 1;
    transform: translateX(0px);
    display: inline-block;
    width: 14px;
    text-align: center;
    position: relative;
    left: -1px;
    font-size: 16px;
    line-height: 24px;
`

const CartSvg = styled.svg`
    position: absolute;
    top: 14px;
    right: 16px;
    transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s;
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
`