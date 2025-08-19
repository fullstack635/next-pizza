import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../../stores/rootStoreProvider'

const Right = observer(() => {
	const state = useRootStore();
	return (
		<RRight>
			<DodoCoin>
				<Icon className='dodocoin'>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M11 1a1 1 0 011 1v2a8 8 0 110 16v2a1 1 0 11-2 0v-2H6.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C5.76 4 6.04 4 6.6 4H10V2a1 1 0 011-1zm1 17a6 6 0 000-12H7v12h5z" fill="#000"></path></svg>
				</Icon>
				<Label>{state.LangStore.t('right.dodoCoins')}</Label>
			</DodoCoin>
			<Button>{state.LangStore.t('right.login')}</Button>
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

const DodoCoin = styled.a`
	display: flex;
	position: relative;
	flex-direction: column;
	-moz-box-align: center;
	align-items: center;
	margin-right: 32px;
	text-decoration: none;
	cursor: pointer;
	&:hover{
		color: rgb(255, 105, 0);
	}
	&:hover .dodocoin {
			transform: rotateY(0deg) rotate(25deg);	
			fill: rgb(255, 105, 0);
	}
			
`

const Icon = styled.span`
	transition: transform 500ms ease 0s;
`

const Label = styled.span`
	font-weight: 600;
	font-size: 14px;
	line-height: 18px;
	white-space: nowrap;
	position: relative;
	display: block;
	margin-bottom: 8px;
	text-align: left;
`

const Button = styled.button`
	height: 32px;
	padding: 8px 16px;
	font-size: 14px;
	line-height: 16px;
	background-color: rgb(243, 243, 247);
	color: rgb(92, 99, 112);
	outline: currentcolor none medium;
	border: medium none;
	border-radius: 9999px;
	text-align: center;
	font-weight: 500;
	text-decoration: none;
	position: relative;
	overflow: hidden;
	cursor: pointer;
	user-select: none;
	transition-property: background-color, color;
	transition-duration: 200ms;
	transition-timing-function: ease-out;
	&:hover {
		color: rgb(0, 0, 0);
		font-weight: 600;
	}
`

const LangSwitch = styled.div`
	display: flex;
	margin-left: 12px;
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
`