import React from 'react'
import { Header, Product, ProductFooter, ProductPicture, ProductInner, ProductName, Section, ProductImage, InnerFooter, MoneyContainer, MoneyCurrency, MoneyValue, Button } from '../Main.style'
import { pseudostore } from '../../../constants/store'
import { useRootStore } from '../../../stores/rootStoreProvider';
import { productTranslations } from '../../../constants/productTranslations';


export default function Pizza(): JSX.Element {
	const state = useRootStore();
	const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
		(e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMloiIGZpbGw9IiNmZjY5MDAiLz4KPHBhdGggZD0iTTEyIDZDNi40OCA2IDIgMTAuNDggMiAxNkMyIDIxLjUyIDYuNDggMjYgMTIgMjZDMjEuNTIgMjYgMjYgMjEuNTIgMjYgMTZDMjYgMTAuNDggMjEuNTIgNiAxMiA2WiIgZmlsbD0iI2ZmOTAwMCIvPgo8cGF0aCBkPSJNMTIgMTBDOC42OSAxMCA2IDEyLjY5IDYgMTZDNiAxOS4zMSA4LjY5IDIyIDEyIDIyQzE1LjMxIDIyIDE4IDE5LjMxIDE4IDE2QzE4IDEyLjY5IDE1LjMxIDEwIDEyIDEwWiIgZmlsbD0iI2ZmYjMwMCIvPgo8L3N2Zz4K';
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
