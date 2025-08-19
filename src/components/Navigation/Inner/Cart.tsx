import { observer } from 'mobx-react-lite';
import React from 'react'
import styled from 'styled-components'
import { useRootStore } from '../../../stores/rootStoreProvider';


const Cart = observer(() => {
	const state = useRootStore();
	return (
		<CCart>
			{/* Cart removed */}
		</CCart>
	)
});

export default Cart;

const CCart = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	z-index: 1;
	height: 100%;
`