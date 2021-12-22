import { observer } from 'mobx-react-lite';
import React from 'react'
import styled from 'styled-components'
import { ICart, ICartPizza, isPizza, PizzaDough, PizzaSize } from '../../../model/CartModel';
import { useRootStore } from '../../../pages/_app'

const CartModal = observer(() => {

    const state = useRootStore();

    const SizeSwitch = (size: PizzaSize) => {
        switch (size) {
            case 'sm':
                return 'Маленькая 25 см';
            case 'md':
                return 'Средняя 30 см';
            case 'xl':
                return 'Большая 35 см';
        };
    };

    const DoughSwitch = (dough: PizzaDough) => {
        switch (dough) {
            case 'thin':
                return 'тонкое тесто';
            case 'trad':
                return 'традиционное тесто';
        }
    }

    const CartInfoToHuman = (item: ICartPizza) => {
        return `${SizeSwitch(item.size)}, ${DoughSwitch(item.dough)}`
    }

    return (
        <>
            <Overlay onClick={() => state.UiStore.hideModal()} />
            <Base>
                <CloseButton onClick={() => state.UiStore.hideModal()}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z" fill="#fff"></path></svg>
                </CloseButton>
                <OuterContainer>
                    <InnerContainer>
                        <MainContainer>
                            <Main>
                                <HeaderContainer>
                                    <Header>{state.CartStore.cart.length} товар на {state.CartStore.getTotalPrice()}</Header>
                                </HeaderContainer>
                                <CartList>
                                    {state.CartStore.cart.map((item, index) => (
                                        <CartItem key={index}>
                                            <CartItemBack />
                                            <ItemMain>
                                                <ItemPicture>
                                                    <ItemIMG src={item.pic} />
                                                </ItemPicture>
                                                <ItemInfo>
                                                    <ItemName>{item.name}</ItemName>
                                                    <ItemAdditionalInfo>{isPizza(item) ? `${CartInfoToHuman(item)}` : item.weight}</ItemAdditionalInfo>
                                                </ItemInfo>
                                            </ItemMain>
                                            <ItemFooter>
                                                <ItemPriceContainer>
                                                    <ItemPrice>{state.CartStore.getItemPrice(item.id)} ₽</ItemPrice>
                                                </ItemPriceContainer>
                                                <QuantityContainerOuter>
                                                    <QuantityContainerInner>
                                                        <Decrease onClick={() => state.CartStore.decreaseQuantity(item.id)}>
                                                            <svg width="10" height="10" viewBox="0 0 10 10"><rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect></svg>
                                                        </Decrease>
                                                        <Quantity>
                                                            {state.CartStore.getItemQuantity(item.id)}
                                                        </Quantity>
                                                        <Increase onClick={() => state.CartStore.increaseQuantity(item.id)}>
                                                            <svg width="10" height="10" viewBox="0 0 10 10"><g fill="#454B54"><rect x="4" width="2" height="10" ry="1"></rect><rect y="4" width="10" height="2" rx="1"></rect></g></svg>
                                                        </Increase>
                                                    </QuantityContainerInner>
                                                </QuantityContainerOuter>
                                            </ItemFooter>
                                        </CartItem>
                                    ))}
                                </CartList>
                            </Main>
                        </MainContainer>
                    </InnerContainer>
                </OuterContainer>
            </Base>
        </>
    )
});

export default CartModal;

const Overlay = styled.div`
    opacity: 1;
    position: fixed;
    inset: 0px;
    background: rgba(0, 0, 0, 0.64) none repeat scroll 0% 0%;
    transition: opacity 300ms ease-out 0s;
`

const Base = styled.div`
    transform: translateX(0px);
    display: flex;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    width: 430px;
    background: rgb(243, 243, 247) none repeat scroll 0% 0%;
    transition-property: transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.5, 1, 0.5, 1);
`

const CloseButton = styled.button`
    margin: 0px;
    padding: 0px;
    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
    border: medium none;
    font: inherit;
    cursor: pointer;
    position: absolute;
    width: 25px;
    height: 25px;
    top: calc(50% - 12px);
    left: -48px;
    transition: transform 500ms ease 0s;
`

const OuterContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
`

const InnerContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
`

const MainContainer = styled.div`
    position: absolute;
    inset: 0px;
    overflow: scroll;
    margin-right: -17px;
    margin-bottom: -17px;
`

const Main = styled.main`
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
`

const HeaderContainer = styled.section`
    padding: 0px 16px;
    flex: 0 0 auto;
`

const Header = styled.h1`
    margin-top: 24px;
    margin-bottom: 4px;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
`

const CartList = styled.section`
    
`

const CartItem = styled.article`
    position: relative;
    padding: 12px 16px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    margin-bottom: 8px;
`

const CartItemBack = styled.div`
    position: absolute;
    inset: 0px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    opacity: 0;
    transition: opacity 150ms ease 0s;
    z-index: 1;
    pointer-events: none;
`

const ItemMain = styled.div`
    display: flex;
    border-bottom: 1px solid rgb(226, 226, 233);
    padding-bottom: 12px;
`

const ItemPicture = styled.picture`
    max-width: 64px;
    max-height: 64px;
    flex: 0 0 auto;
    margin: 0px 16px 0px 0px;
    width: 100%;
    position: relative;
    user-select: none;
    image-rendering: auto;
    display: flex;
    flex-flow: column nowrap;
`

const ItemIMG = styled.img`
    width: 95%;
    margin: 5% 0px 0px 5%;
    object-fit: contain;
    image-rendering: auto;
`

const ItemInfo = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-flow: column nowrap;
    -moz-box-pack: center;
    justify-content: center;
`

const ItemName = styled.h3`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: rgb(0, 0, 0);
    margin: 0px 0px 4px;
`

const ItemAdditionalInfo = styled.section`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: rgb(92, 99, 112);
    margin: 0px;
    white-space: pre-wrap;
`

const ItemFooter = styled.div`
    display: flex;
    -moz-box-pack: justify;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
    margin-top: 12px;
`

const ItemPriceContainer = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    -moz-box-align: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: rgb(0, 0, 0);
`

const ItemPrice = styled.div`
    margin: 8px 8px 8px 0px;
`

const QuantityContainerOuter = styled.div`
    flex: 0 0 auto;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: end;
    justify-content: flex-end;
`

const QuantityContainerInner = styled.div`
    position: relative;
    width: 96px;
    height: 32px;
    display: flex;
    background-color: rgb(243, 243, 247);
    box-sizing: border-box;
    border-radius: 9999px;
    -moz-box-pack: justify;
    justify-content: space-between;
`

const Decrease = styled.button`
    margin: 0px;
    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
    cursor: pointer;
    position: relative;
    vertical-align: top;
    height: 100%;
    padding: 0px 8px;
    width: 35.41%;
    border: medium none;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
`

const Increase = styled.button`
    margin: 0px;
    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
    cursor: pointer;
    position: relative;
    vertical-align: top;
    height: 100%;
    padding: 0px 8px;
    width: 35.41%;
    border: medium none;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
`

const Quantity = styled.div`
    position: relative;
    z-index: 1;
    height: 100%;
    color: rgb(92, 99, 112);
    font-size: 16px;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    font-weight: 500;
`