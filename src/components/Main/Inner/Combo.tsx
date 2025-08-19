import React from 'react'
import { pseudostore } from '../../../constants/store'
import { useRootStore } from '../../../stores/rootStoreProvider';
import { Button, Header, InnerFooter, MoneyContainer, MoneyCurrency, MoneyValue, Product, ProductFooter, ProductImage, ProductInner, ProductName, ProductPicture, Section } from '../Main.style'
import { productTranslations } from '../../../constants/productTranslations';

export default function Combo(): JSX.Element {
	const state = useRootStore();
	const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
		(e.currentTarget as HTMLImageElement).src = '/assets/combo-icon.svg';
	};
	return (
		<>
			<Header id="combo">{state.LangStore.t('nav.combo')}</Header>
			<Section>
				{pseudostore.combo.map((item) => {
					const key = `combo:${item.id}` as const;
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
										<MoneyValue> {item.price} </MoneyValue>
										<MoneyCurrency>₽</MoneyCurrency>
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
