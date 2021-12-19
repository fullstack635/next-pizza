import { observer } from 'mobx-react-lite';
import React from 'react'
import styled from 'styled-components'
import { useRootStore } from '../pages/_app';
import { CurrentModalType } from '../stores/UiStore';
import CartModal from './Modals/CartModal/CartModal';
import GeneralModal from './Modals/SimpleProductModal/GeneralModal';
import PizzaModal from './Modals/PizzaModal/PizzaModal'



export const ModalBase = observer(() => {

    const state = useRootStore();

    const renderSwitch = (type: CurrentModalType) => {
        switch (type) {
            case 'pizza':
                return <PizzaModal />;
            case 'cart':
                return <CartModal />;
            case 'simple':
                return <GeneralModal />;
            default:
                return null;
        }
    }

    return (
        <Base>
            {renderSwitch(state.UiStore.currentModal)}
        </Base>
    )
})

const Base = styled.div`
    z-index: 1000;
    position: relative; 
`