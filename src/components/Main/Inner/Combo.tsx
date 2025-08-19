import React from 'react'
import { pseudostore } from '../../../constants/store'
import { useRootStore } from '../../../stores/rootStoreProvider';
import { Button, Header, InnerFooter, MoneyContainer, MoneyCurrency, MoneyValue, Product, ProductFooter, ProductImage, ProductInner, ProductName, ProductPicture, Section } from '../Main.style'
import { productTranslations } from '../../../constants/productTranslations';

export default function Combo(): JSX.Element {
	const state = useRootStore();
	const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
		(e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDNIMTVDMTQuNDUgMyAxNCAzLjQ1IDE0IDRWMUg2VjRDNiAzLjQ1IDUuNTUgMyA1IDNIMUMwLjQ1IDMgMCAzLjQ1IDAgNFYxOEMwIDE4LjU1IDAuNDUgMTkgMSAxOUg1QzUuNTUgMTkgNiAxOC41NSA2IDE4VjE3SDE0VjE4QzE0IDE4LjU1IDE0LjQ1IDE5IDE1IDE5SDE5QzE5LjU1IDE5IDIwIDE4LjU1IDIwIDE4VjRDMjAgMy40NSAxOS41NSAzIDE5IDNaTTE4IDE3SDZWNkgxOFYxN1oiIGZpbGw9IiNmZjY5MDAiLz4KPHBhdGggZD0iTTggOEgxNlYxMEg4VjhaIiBmaWxsPSIjZmY2OTAwIi8+Cjwvc3ZnPgo=';
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
