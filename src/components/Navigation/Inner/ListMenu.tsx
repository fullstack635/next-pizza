import React from 'react'
import styled, { DefaultStyledComponent } from 'styled-components'

interface ListMenuProps {
    sticky: boolean;
}

export default function ListMenu(props: ListMenuProps): JSX.Element {
    return (
        <List sticky={props.sticky}>
            <ListItem>
                <InnerLink href="#pizza">Пицца</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink href="#combo">Комбо</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink href="#snack">Закуски</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink href="#desert">Десерты</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink href="#drink">Напитки</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink href="#other">Другие товары</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink>Акции</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink>Контакты</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink>О нас</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink>Работа в Додо</InnerLink>
            </ListItem>
        </List>
    )
}

interface ListProps extends DefaultStyledComponent {
    sticky: boolean;
}

const List = styled.ul<ListProps>`
    white-space: nowrap;
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: inline-block;
    vertical-align: middle;
    transition: transform 0.25s ease 0s;
    transform: ${(props) => props.sticky ? 'translateX(0px)' : 'translateX(-52px)'};
`

const ListItem = styled.li`
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    list-style: none;
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
    &:first-child {
        margin-left: 0px;
    }
`

const InnerLink = styled.a`
    display: inline-block;
    font-weight: 500;
    padding: 22px 0px;
    color: black;
    font-size: 14px;
    line-height: 1;
    transition: color 0.25s ease 0s, padding 0.25s ease 0s;
    text-decoration: none;
    cursor: pointer;
    outline: currentcolor none medium;
    &:hover {
        color: rgb(255, 105, 0);
    }
`
