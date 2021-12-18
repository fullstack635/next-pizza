import { observer } from 'mobx-react-lite';
import React from 'react'
import styled from 'styled-components'
import { useRootStore } from '../../pages/_app';
import PizzaModal from './Inner/PizzaModal'

export const ModalBase = observer(() => {

    const state = useRootStore();

    return (
        <Base>
            <Example onClick={() => state?.UiStore.toggleDark()}></Example>
            {state?.UiStore.showModal ?
                <PizzaModal />
                : null}
        </Base>
    )
})

const Base = styled.div`
    z-index: 1000;
    position: relative; 
`

const Example = styled.div`
    width: 200px;
    background-color: red;
    height: 200px;
`