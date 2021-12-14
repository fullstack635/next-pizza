import React from 'react'
import { Header, Product, ProductFooter, ProductPicture, ProductInner, ProductName, Section, ProductImage, InnerFooter, MoneyContainer, MoneyCurrency, MoneyValue, Button } from '../Main.style'
import { pseudostore } from '../../../constants/store'

export default function Pizza(): JSX.Element {
    return (
        <>
            <Header>Пицца</Header>
            <Section>
                {pseudostore.pizza.map((item) => (
                    <Product key={item.id}>
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
                                от
                                <MoneyContainer>
                                    <MoneyValue> {item.pricesm} </MoneyValue>
                                    <MoneyCurrency>₽</MoneyCurrency>
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
