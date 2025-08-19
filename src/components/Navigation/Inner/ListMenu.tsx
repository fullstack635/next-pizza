import React from 'react'
import styled, { DefaultStyledComponent } from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../../stores/rootStoreProvider'

interface ListMenuProps {
    sticky: boolean;
}

const ListMenu = observer((props: ListMenuProps): JSX.Element => {
    const state = useRootStore();
    const t = (key: string) => state.LangStore.t(key);
    return (
        <List sticky={props.sticky}>
            <ListItem>
                <InnerLink href="#pizza">{t('nav.pizza')}</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink href="#combo">{t('nav.combo')}</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink href="#snack">{t('nav.snacks')}</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink href="#desert">{t('nav.deserts')}</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink href="#drink">{t('nav.drinks')}</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink href="#other">{t('nav.other')}</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink>{t('nav.sales')}</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink>{t('nav.contacts')}</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink>{t('nav.about')}</InnerLink>
            </ListItem>
            <ListItem>
                <InnerLink>{t('nav.careers')}</InnerLink>
            </ListItem>
        </List>
    )
});

export default ListMenu;

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
