import React from 'react'
import { Header, Product, ProductFooter, ProductPicture, ProductInner, ProductName, Section, ProductImage, InnerFooter, MoneyContainer, MoneyCurrency, MoneyValue, Button } from '../Main.style'
import { pseudostore } from '../../../constants/store'
import { useRootStore } from '../../../stores/rootStoreProvider';


export default function Pizza(): JSX.Element {
    const state = useRootStore();
    return (
        <>
            <Header id="pizza">Пицца</Header>
            <Section>
                {pseudostore.pizza.map((item) => (
                    <Product key={item.id} onClick={() => state.UiStore.setCurrentProduct(item)}>
                        <ProductInner>
                            <ProductPicture>
                                <ProductImage src={item.pic} />
                            </ProductPicture>
                            <ProductName>
                                {item.name}
                            </ProductName>
                            {item.desc}
                        </ProductInner>
                        <ProductFooter>
                            <InnerFooter>
                                <MoneyContainer>
                                    от
                                    <MoneyValue> {item.price.sm} </MoneyValue>
                                    <MoneyCurrency> ₽</MoneyCurrency>
                                </MoneyContainer>
                                <Button>Выбрать</Button>
                            </InnerFooter>
                        </ProductFooter>
                    </Product>
                ))}
            </Section>
        </>
    )
}
