import React from 'react'
import styled from 'styled-components'
import Combo from './Inner/Combo'
import Deserts from './Inner/Deserts'
import Drinks from './Inner/Drinks'
import Other from './Inner/Other'
import Pizza from './Inner/Pizza'
import Snacks from './Inner/Snacks'

export default function Main(): JSX.Element {
    return (
        <MMain>
            <Pizza />
            <Combo />
            <Snacks />
            <Deserts />
            <Drinks />
            <Other />
        </MMain>
    )
}

const MMain = styled.main`
    display: flex;
    flex: 1 0 auto;
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
`

