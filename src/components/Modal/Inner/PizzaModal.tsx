import React from 'react'
import styled from 'styled-components'
import { useRootStore } from '../../../pages/_app';

export default function PizzaModal(): JSX.Element {

    const [size, setsize] = React.useState('md');
    const [dough, setDough] = React.useState('classic');

    const state = useRootStore();

    return (
        <Base>
            <Overlay onClick={() => state.UiStore.hideModal()} />
            <Inner>
                <Modal>
                    <CloseContainer>
                        <CloseIcon onClick={() => state.UiStore.hideModal()} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z" fill="white"></path>
                        </CloseIcon>
                    </CloseContainer>
                    <ProductCard>
                        <ProductImageContainer>
                            <img src={state.UiStore.currentProduct.pic}></img>
                        </ProductImageContainer>
                        <ProductInfo>

                        </ProductInfo>
                    </ProductCard>
                </Modal>
            </Inner>
        </Base>
    )
}

const Base = styled.div`
    position: fixed;
    inset: 0px;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    align-items: flex-start;
    z-index: 1000;
    overflow: auto;
`
const Overlay = styled.div`
    opacity: 0.55;
    position: fixed;
    inset: 0px;
    background: black none repeat scroll 0% 0%;
    transition: opacity 150ms ease 0s;
`

const Inner = styled.div`
    padding: 24px;
    display: flex;
    flex-flow: column nowrap;
    min-height: 100%;
`

const Modal = styled.div`
    opacity: 1;
    transform: scale(1);
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    border-radius: 20px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px;
    box-sizing: border-box;
    transform: scale(0.96);
    transition-duration: 150ms;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: opacity, transform;
    flex: 0 0 auto;
`

const CloseContainer = styled.i`
    position: absolute;
    top: 13px;
    right: -38px;
    cursor: pointer;
    transition: transform 0.1s ease-in-out 0s;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    font-size: 0px;
    line-height: 0;
    font-style: normal;
`

const CloseIcon = styled.svg`
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
    max-height: 100%;
    text-align: center;
    font-size: 0px;
    line-height: 0;
    font-style: normal;
`

const ProductCard = styled.div`
    position: relative;
    width: 924px;   
`

const ProductImageContainer = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 530px;
    max-height: 610px;
`

const ProductInfo = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 394px;
    height: 610px;
    padding: 30px 0px;
    background: rgb(252, 252, 252) none repeat scroll 0% 0%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`