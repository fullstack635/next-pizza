import React from 'react'
import { Header, Product, ProductFooter, ProductPicture, ProductInner, ProductName, Section, ProductImage, InnerFooter, MoneyContainer, MoneyCurrency, MoneyValue, Button } from '../Main.style'
import { pseudostore } from '../../../constants/store'
import { useRootStore } from '../../../stores/rootStoreProvider';
import { productTranslations } from '../../../constants/productTranslations';


export default function Pizza(): JSX.Element {
	const state = useRootStore();
	const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
		(e.currentTarget as HTMLImageElement).src = '/assets/pizza-icon.svg';
	};
	return (
		<>
			<Header id="pizza">{state.LangStore.t('nav.pizza')}</Header>
			<Section>
				{pseudostore.pizza.map((item) => {
					const key = `pizza:${item.id}` as const;
					const tr = productTranslations[state.LangStore.locale][key];
					const name = tr?.name ?? item.name;
					const desc = tr?.desc ?? item.desc;
					return (
						<Product key={item.id} onClick={() => state.UiStore.setCurrentProduct(item)}>
							<ProductInner>
								<ProductPicture>
									<ProductImage src={item.pic} onError={handleImgError} />
								</ProductPicture>
								<ProductName>
									{name}
								</ProductName>
								{desc}
							</ProductInner>
							<ProductFooter>
								<InnerFooter>
									<MoneyContainer>
										{state.LangStore.t('common.from')}
										<MoneyValue> {item.price.sm} </MoneyValue>
										<MoneyCurrency> ₽</MoneyCurrency>
									</MoneyContainer>
									<Button>{state.LangStore.t('buttons.choose')}</Button>
								</InnerFooter>
							</ProductFooter>
						</Product>
					);
				})}
			</Section>
		</>
	)
}
