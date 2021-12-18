import React from 'react'
import styled from 'styled-components'

export default function CartModal() {
    return (
        <div>
            <Overlay />
        </div>
    )
}

const Overlay = styled.div`
    opacity: 1;
    position: fixed;
    inset: 0px;
    background: rgba(0, 0, 0, 0.64) none repeat scroll 0% 0%;
    transition: opacity 300ms ease-out 0s;
`