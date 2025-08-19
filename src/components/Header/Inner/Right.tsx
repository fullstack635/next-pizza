import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../../stores/rootStoreProvider'

const Right = observer(() => {
	const state = useRootStore();
	return (
		<RRight>
			<LangSwitch>
				<LangBtn active={state.LangStore.locale === 'en'} onClick={() => state.LangStore.setLocale('en')}>EN</LangBtn>
				<LangBtn active={state.LangStore.locale === 'pl'} onClick={() => state.LangStore.setLocale('pl')}>PL</LangBtn>
			</LangSwitch>
		</RRight>
	)
});

export default Right;

const RRight = styled.div`
	display: flex;
	-moz-box-align: center;
	align-items: center;
`

const LangSwitch = styled.div`
	display: flex;
	gap: 6px;
`

interface LangBtnProps {
	active: boolean;
}

const LangBtn = styled.button<LangBtnProps>`
	height: 28px;
	padding: 6px 10px;
	font-size: 12px;
	line-height: 14px;
	border-radius: 9999px;
	border: 1px solid ${(p) => p.active ? 'rgb(255, 105, 0)' : 'rgb(220,220,220)'};
	background: ${(p) => p.active ? 'rgba(255,105,0,0.1)' : 'white'};
	color: ${(p) => p.active ? 'rgb(255, 105, 0)' : 'rgb(92, 99, 112)'};
	cursor: pointer;
	transition: all 0.2s ease;
	
	&:hover {
		border-color: rgb(255, 105, 0);
		color: rgb(255, 105, 0);
	}
`