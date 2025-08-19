import { observer } from 'mobx-react-lite';
import React from 'react'
import styled from 'styled-components'
import { Product } from '../../../constants/store';
import { ICartGeneral } from '../../../model/CartModel';
import { useRootStore } from '../../../stores/rootStoreProvider';
import { productTranslations } from '../../../constants/productTranslations';

const SimpleProductModal = observer(() => {
	const state = useRootStore();

	const Product = (state.UiStore.currentProduct as Product);
	const key = `${Product?.type}:${Product?.id}` as const;
	const tr = productTranslations[state.LangStore.locale][key];
	const nameTr = tr?.name ?? Product?.name;
	const descTr = tr?.desc ?? Product?.desc;

	const ProductToCart = (): ICartGeneral => {
		return {
			id: Product.id,
			pic: Product.pic,
			weight: Product.weight,
			quantity: 1,
			name: nameTr,
			price: Product.price,
		};
	};

	const addProduct = () => {
		state.CartStore.addSimple(ProductToCart());
		state.UiStore.hideModal();
	}

	const getIconForType = (type: string) => {
		switch (type) {
			case 'pizza': return '/assets/pizza-icon.svg';
			case 'combo': return '/assets/combo-icon.svg';
			case 'snack': return '/assets/snack-icon.svg';
			case 'drink': return '/assets/drink-icon.svg';
			case 'desert': return '/assets/dessert-icon.svg';
			case 'other': return '/assets/other-icon.svg';
			default: return '/assets/placeholder.svg';
		}
	};

	const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
		(e.currentTarget as HTMLImageElement).src = getIconForType(Product?.type || 'other');
	};

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
						<Picture>
							<Img src={state.UiStore.currentProduct?.pic} onError={handleImgError}></Img>
						</Picture>
						<Main>
							<Header>{nameTr}</Header>
							<Weight>{state.UiStore.currentProduct?.weight}</Weight>
							<Description>{descTr}</Description>
							<Button onClick={() => addProduct()}>
								{state.LangStore.t('buttons.addToCart')} 
								<MoneyContainer>
									<Value>{state.UiStore.currentProduct?.price}</Value>
									<Currency> ₽</Currency>
								</MoneyContainer>
							</Button>
						</Main>
					</ProductCard>
				</Modal>
			</Inner>
		</Base>
	)
});

export default SimpleProductModal;

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

const ProductCard = styled.section`
	display: flex;
`

const Picture = styled.picture`
	width: 292px;
	margin: 48px;
	align-self: flex-start;
	position: relative;
	user-select: none;
	image-rendering: auto;
	display: flex;
	flex-flow: column nowrap;
`

const Img = styled.img`
	width: 100%;
	object-fit: contain;
	image-rendering: auto;
`

const Main = styled.main`
	width: 324px;
	margin: 32px;
	font-size: 14px;
	line-height: 20px;
	display: flex;
	flex-flow: column nowrap;
`

const Header = styled.h1`
	font-size: 24px;
	line-height: 28px;
	font-weight: 500;
	color: rgb(0, 0, 0);
	margin: 0px;
	flex: 0 0 auto;
	padding-right: 32px;
`

const Weight = styled.span`
	margin: 4px 0px;
	color: rgb(92, 99, 112);
	flex: 0 0 auto;
`

const Description = styled.span`
	color: rgb(0, 0, 0);
	margin-bottom: 32px;
	flex: 1 1 auto;
`

const Button = styled.button`
	height: 48px;
	padding: 12px 24px;
	font-size: 16px;
	line-height: 24px;
	background-color: rgb(255, 105, 0);
	color: rgb(255, 255, 255);
	flex: 0 0 auto;
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
	width: 100%;

`

const MoneyContainer = styled.span`
	white-space: nowrap;
	color: rgb(255, 255, 255);
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	font-weight: 500;
	cursor: pointer;
`

const Value = styled.span`
	margin-left: 5px;
`

const Currency = styled.span`
	margin-left: -2px;
`