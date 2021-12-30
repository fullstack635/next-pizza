import { observer } from 'mobx-react-lite';
import React from 'react'
import styled, { DefaultStyledComponent } from 'styled-components'
import { Pizza } from '../../../constants/store';
import { ICartPizza, PizzaDough, PizzaSize } from '../../../model/CartModel';
import { useRootStore } from '../../../stores/rootStoreProvider';

const PizzaModal = observer(() => {

    const [size, setSize] = React.useState<PizzaSize>('md');
    const [dough, setDough] = React.useState<PizzaDough>('trad');

    const state = useRootStore();

    const Pizza = (state.UiStore.currentProduct as Pizza);

    const PizzaToCart = (): ICartPizza => {
        return {
            id: Pizza.id,
            pic: Pizza.pic,
            quantity: 1,
            size: size,
            dough: dough,
            name: Pizza.name,
            price: Pizza.price[size]
        };
    };

    const StyleSizeSwitch = (size: PizzaSize) => {
        switch (size) {
            case 'sm':
                return 'translateX(0%)';
            case 'md':
                return 'translateX(100%)';
            case 'xl':
                return 'translateX(200%)';
            default:
                return 'translateX(100%)';
        }
    }

    const SizeSwitch = (size: PizzaSize) => {
        switch (size) {
            case 'sm':
                return '25 см';
            case 'md':
                return '30 см';
            case 'xl':
                return '35 см';
            default:
                return '30 см';
        }
    }

    const addProduct = () => {
        state.CartStore.addPizza(PizzaToCart());
        state.UiStore.hideModal();
    }

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
                        <LeftColumn>
                            <ImageContainer>
                                <ImageOuter>
                                    <img src={state.UiStore.currentProduct?.pic}></img>
                                </ImageOuter>
                            </ImageContainer>
                            <SvgContainer>
                                <SvgOuter>
                                    <Svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse opacity="0.6" cx="225" cy="225" rx="224" ry="224" stroke="#6F6E6F" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 12.2"></ellipse>
                                    </Svg>
                                </SvgOuter>
                            </SvgContainer>
                        </LeftColumn>
                        <RightColumn>
                            <Main>
                                <ScrollBoxOuter>
                                    <ScrollBoxInner>
                                        <ContainerOuter>
                                            <ContainerInner>
                                                <FirstRow>
                                                    <PizzaTitle>{state.UiStore.currentProduct?.name}</PizzaTitle>
                                                </FirstRow>
                                                <SecondRow>
                                                    <RowInfo>{SizeSwitch(size)}, {dough === 'trad' ? 'традиционное тесто' : 'тонкое тесто'}, {(state.UiStore.currentProduct as Pizza)?.weight[dough][size as Exclude<PizzaSize, 'sm'>]} г</RowInfo>
                                                </SecondRow>
                                                <ThirdRow>
                                                    <PizzaDescription>{state.UiStore.currentProduct?.desc}</PizzaDescription>
                                                </ThirdRow>
                                                <FourthRow>
                                                    <SizeTumblerContainer>
                                                        <SizeTumbler sizeSwitch={() => StyleSizeSwitch(size)} />
                                                        <Checkbox type='radio' value={1} />
                                                        <TumblerLabel onClick={() => setSize('sm')}>Маленькая</TumblerLabel>
                                                        <Checkbox type='radio' value={2} />
                                                        <TumblerLabel onClick={() => setSize('md')}>Средняя</TumblerLabel>
                                                        <Checkbox type='radio' value={3} />
                                                        <TumblerLabel onClick={() => setSize('xl')}>Большая</TumblerLabel>
                                                    </SizeTumblerContainer>
                                                    <DoughTumblerContainer>
                                                        <DoughTumbler dough={dough} />
                                                        <Checkbox />
                                                        <TumblerLabel onClick={() => setDough('trad')}>Традиционное</TumblerLabel>
                                                        <Checkbox />
                                                        <TumblerLabel onClick={() => setDough('thin')}>Тонкое</TumblerLabel>
                                                    </DoughTumblerContainer>
                                                </FourthRow>
                                            </ContainerInner>
                                        </ContainerOuter>
                                    </ScrollBoxInner>
                                </ScrollBoxOuter>
                            </Main>
                            <Footer>
                                <Button onClick={() => addProduct()}>
                                    Добавить в корзину за
                                    <MoneyContainer>
                                        <Price> {(state.UiStore.currentProduct as Pizza)?.price[size]} </Price>
                                        <Currency>₽</Currency>
                                    </MoneyContainer>
                                </Button>
                            </Footer>
                        </RightColumn>
                    </ProductCard>
                </Modal>
            </Inner>
        </Base>
    )
});

export default PizzaModal;


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
    &::before {
        content: " ";
        display: block;
        width: 100%;
        flex: 1 1 auto;
    }
    &::after {
        content: " ";
        display: block;
        width: 100%;
        flex: 1 1 auto;
    }
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

const LeftColumn = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 530px;
    max-height: 610px;
`

const ImageContainer = styled.div`
    position: relative;
    margin: 115px 52px 0px;
    transition: margin 0.25s ease-in-out 0s;
`

const ImageOuter = styled.picture`
    width: 100%;
    position: relative;
    user-select: none;
    image-rendering: auto;
    display: flex;
    flex-flow: column nowrap;
`

const SvgContainer = styled.div`
    position: absolute;
    z-index: 2;
    top: 80px;
    left: 40px;
`

const SvgOuter = styled.i`
    display: inline-block;
    vertical-align: top;
    text-align: center;
    font-size: 0px;
    line-height: 0;
    font-style: normal;
`

const Svg = styled.svg`
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
    max-height: 100%;
    text-align: center;
    font-size: 0px;
    line-height: 0;
    font-style: normal;
`
const RightColumn = styled.div`
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

const Main = styled.div`
    position: relative;
    z-index: 0;
    height: 478px;
`

const ScrollBoxOuter = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
`

const ScrollBoxInner = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
`

const ContainerOuter = styled.div`
    position: absolute;
    inset: 0px;
    overflow: scroll;
    margin-right: -17px;
    margin-bottom: -17px;
    padding-bottom: 3px;
`

const ContainerInner = styled.div`
    padding: 0px 30px;
`

const FirstRow = styled.div`
    position: relative;
    padding-right: 30px;
`

const PizzaTitle = styled.span`
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
`

const SecondRow = styled.div`
    padding: 1px 0px 5px;
`

const RowInfo = styled.span`
    color: rgb(92, 99, 112);
    font-size: 14px;
    line-height: 20px;
`
const ThirdRow = styled.div`
    margin-bottom: 8px;
    font-size: 14px;
    color: rgb(0, 0, 0);
`

const PizzaDescription = styled.div`
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: rgb(0, 0, 0);
`

const FourthRow = styled.div`
    position: relative;
`

const SizeTumblerContainer = styled.div`
    border-radius: 9999px;
    background-color: rgb(243, 243, 247);
    height: 32px;
    display: flex;
    position: relative;
    overflow: hidden;
    margin: 8px 0px;
`

interface SizeTumbleProps extends DefaultStyledComponent {
    sizeSwitch: () => string;
}

const SizeTumbler = styled.div<SizeTumbleProps>`
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: calc(33.3333%);
    transform: ${(props) => props.sizeSwitch()};
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    transition-delay: 0s;
    transition-property: transform, width;
    padding: 2px;
    &::before {
        content: " ";
        width: 100%;
        height: 100%;
        display: block;
        background-color: rgb(255, 255, 255);
        border-radius: 9999px;
        box-shadow: rgba(6, 5, 50, 0.19) 0px 6px 20px;
    }
`

const Checkbox = styled.input`
    position: absolute;
    display: none;
`

const TumblerLabel = styled.label`
    display: block;
    flex: 1 1 0%;
    position: relative;
    cursor: pointer;
    user-select: none;
    border-radius: 9999px;
    color: rgb(0, 0, 0);
    font-size: 12px;
    line-height: 32px;
    font-weight: normal;
    text-align: center;
    height: 32px;
    transition: color 150ms ease 0s;
`

const DoughTumblerContainer = styled.div`
    border-radius: 9999px;
    height: 32px;
    display: flex;
    position: relative;
    overflow: hidden;
    margin: 8px 0px;
    background-color: rgb(243, 243, 247);
`

interface DoughTumblerProps extends DefaultStyledComponent {
    dough: string;
}

const DoughTumbler = styled.div<DoughTumblerProps>`
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: calc(50%);
    transform: ${(props) => props.dough === 'trad' ? 'translateX(0%)' : 'translateX(100%)'};
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    transition-delay: 0s;
    transition-property: transform, width;
    padding: 2px;
    &::before {
        content: " ";
        width: 100%;
        height: 100%;
        display: block;
        background-color: rgb(255, 255, 255);
        border-radius: 9999px;
        box-shadow: rgba(6, 5, 50, 0.19) 0px 6px 20px;
    }
`

const Footer = styled.div`
    position: relative;
    z-index: 1;
    margin: 24px 30px 30px;
`

const Button = styled.button`
    height: 48px;
    padding: 12px 24px;
    font-size: 16px;
    line-height: 24px;
    background-color: rgb(255, 105, 0);
    color: rgb(255, 255, 255);
    width: 100%;
    font-weight: 500;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    transition-property: background-color, color;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    outline: currentcolor none medium;
    border: medium none;
    border-radius: 9999px;
`

const MoneyContainer = styled.span`
    white-space: nowrap;
    font-size: 16px;
    line-height: 24px;
    color: rgb(255, 255, 255);
    font-weight: 500;
    cursor: pointer;
`

const Price = styled.span`
    font-size: 16px;
    line-height: 24px;
`

const Currency = styled.span`
    margin-left: -2px;
    white-space: nowrap;
    color: rgb(255, 255, 255);
    text-align: center;
`