import React from 'react'
import styled from 'styled-components'
import Left from './Inner/Left'
import Right from './Inner/Right'

export default function Header(): JSX.Element {
    return (
        <HHeader>
            <Left />
            <Right />
        </HHeader>
    )
}

const HHeader = styled.header`
    display: flex;
    -moz-box-pack: justify;
    justify-content: space-between;
    padding: 24px 0px 16px;
    z-index: 100;
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
`