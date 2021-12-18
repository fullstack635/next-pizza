import { observer } from 'mobx-react-lite';
import React from 'react'
import styled from 'styled-components'
import { useRootStore } from '../../../pages/_app'

const CartModal = observer(() => {
    const state = useRootStore();
    return (
        <>
            <Overlay onClick={() => state.UiStore.hideModal()} />
            <Base>
                <CloseButton onClick={() => state.UiStore.hideModal()}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z" fill="#fff"></path></svg>
                </CloseButton>
            </Base>
        </>
    )
});

export default CartModal;

const Overlay = styled.div`
    opacity: 1;
    position: fixed;
    inset: 0px;
    background: rgba(0, 0, 0, 0.64) none repeat scroll 0% 0%;
    transition: opacity 300ms ease-out 0s;
`

const Base = styled.div`
    transform: translateX(0px);
    display: flex;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    width: 430px;
    background: rgb(243, 243, 247) none repeat scroll 0% 0%;
    transition-property: transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.5, 1, 0.5, 1);
`

const CloseButton = styled.button`
    margin: 0px;
    padding: 0px;
    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
    border: medium none;
    font: inherit;
    cursor: pointer;
    position: absolute;
    width: 25px;
    height: 25px;
    top: calc(50% - 12px);
    left: -48px;
    transition: transform 500ms ease 0s;
`