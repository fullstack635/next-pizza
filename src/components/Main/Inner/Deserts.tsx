import React from 'react'
import { pseudostore } from '../../../constants/store'
import { useRootStore } from '../../../stores/rootStoreProvider';
import { Button, Header, InnerFooter, MoneyContainer, MoneyCurrency, MoneyValue, Product, ProductFooter, ProductImage, ProductInner, ProductName, ProductPicture, Section } from '../Main.style'
import { productTranslations } from '../../../constants/productTranslations';

export default function Deserts(): JSX.Element {
	const state = useRootStore();
	const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
		(e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMloiIGZpbGw9IiNmZjY5MDAiLz4KPHBhdGggZD0iTTggMTJIMTZWMTRIOFYxMloiIGZpbGw9IiNmZmZmZmYiLz4KPHBhdGggZD0iTTEyIDhWMTZIMTJWOFoiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+Cg==';
	};
	return (
		<>
			<Header id="desert">{state.LangStore.t('nav.deserts')}</Header>
			<Section>
				{pseudostore.deserts.map((item) => {
					const key = `desert:${item.id}` as const;
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
									<Button>{state.LangStore.t('buttons.addToCart')}</Button>
								</InnerFooter>
							</ProductFooter>
						</Product>
					);
				})}
			</Section>
		</>
	)
}
