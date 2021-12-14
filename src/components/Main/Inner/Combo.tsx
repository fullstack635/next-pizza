import React from 'react'
import { pseudostore } from '../../../constants/store'
import { Button, Header, InnerFooter, MoneyContainer, MoneyCurrency, MoneyValue, Product, ProductFooter, ProductImage, ProductInner, ProductName, ProductPicture, Section } from '../Main.style'

export default function Combo(): JSX.Element {
    return (
        <>
            <Header>Комбо</Header>
            <Section>
                {pseudostore.combo.map((item) => (
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
                                    <MoneyValue> {item.price} </MoneyValue>
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
