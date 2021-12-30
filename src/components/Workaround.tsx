import { observer } from 'mobx-react-lite';
import React from 'react'
import { useRootStore } from '../stores/rootStoreProvider'
import { Global } from '../styles/Global'

const Workaround = observer(() => {
    const state = useRootStore();
    const lockscroll = state.UiStore.currentModal;
    return (
        <>
            <Global lockscroll={lockscroll} />
        </>
    )
});


export default Workaround;