import React, { useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../stores/rootStoreProvider';
import PaymentForm from '../Payment/PaymentForm';

const Subscription = observer(() => {
	const state = useRootStore();
	const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
	const [showPayment, setShowPayment] = useState(false);

	const plans = {
		monthly: {
			price: 19.99,
			currency: 'USD',
			period: state.LangStore.t('subscription.perMonth'),
			features: [
				state.LangStore.t('subscription.features.unlimited'),
				state.LangStore.t('subscription.features.discount'),
				state.LangStore.t('subscription.features.priority'),
				state.LangStore.t('subscription.features.exclusive')
			]
		},
		yearly: {
			price: 199.99,
			currency: 'USD',
			period: state.LangStore.t('subscription.perYear'),
			features: [
				state.LangStore.t('subscription.features.unlimited'),
				state.LangStore.t('subscription.features.discount'),
				state.LangStore.t('subscription.features.priority'),
				state.LangStore.t('subscription.features.exclusive'),
				'2 months free'
			]
		}
	};

	const handleSubscribe = () => {
		setShowPayment(true);
	};

	return (
		<SubscriptionContainer>
			<Header>
				<Title>{state.LangStore.t('subscription.title')}</Title>
				<Description>{state.LangStore.t('subscription.description')}</Description>
			</Header>

			<PlanSelector>
				<PlanButton 
					active={selectedPlan === 'monthly'} 
					onClick={() => setSelectedPlan('monthly')}
				>
					{state.LangStore.t('subscription.monthly')}
				</PlanButton>
				<PlanButton 
					active={selectedPlan === 'yearly'} 
					onClick={() => setSelectedPlan('yearly')}
				>
					{state.LangStore.t('subscription.yearly')}
				</PlanButton>
			</PlanSelector>

			<PlanCard>
				<PlanHeader>
					<PlanName>{plans[selectedPlan].period}</PlanName>
					<PlanPrice>
						<Price>{plans[selectedPlan].price}</Price>
						<Currency>{plans[selectedPlan].currency}</Currency>
					</PlanPrice>
				</PlanHeader>

				<FeaturesList>
					{plans[selectedPlan].features.map((feature, index) => (
						<FeatureItem key={index}>
							<CheckIcon>✓</CheckIcon>
							{feature}
						</FeatureItem>
					))}
				</FeaturesList>

				<SubscribeButton onClick={handleSubscribe}>
					{state.LangStore.t('buttons.subscribe')}
				</SubscribeButton>
			</PlanCard>

			{showPayment && (
				<PaymentModal>
					<PaymentForm />
				</PaymentModal>
			)}
		</SubscriptionContainer>
	);
});

export default Subscription;

const SubscriptionContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 40px 20px;
`;

const Header = styled.div`
	text-align: center;
	margin-bottom: 40px;
`;

const Title = styled.h1`
	font-size: 32px;
	font-weight: 600;
	color: #333;
	margin-bottom: 16px;
`;

const Description = styled.p`
	font-size: 18px;
	color: #666;
	line-height: 1.5;
`;

const PlanSelector = styled.div`
	display: flex;
	justify-content: center;
	gap: 12px;
	margin-bottom: 40px;
`;

const PlanButton = styled.button<{ active: boolean }>`
	padding: 12px 24px;
	border: 2px solid ${props => props.active ? '#ff6900' : '#ddd'};
	background: ${props => props.active ? '#ff6900' : 'white'};
	color: ${props => props.active ? 'white' : '#333'};
	border-radius: 8px;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		border-color: #ff6900;
		background: ${props => props.active ? '#ff6900' : '#fff5f0'};
	}
`;

const PlanCard = styled.div`
	background: white;
	border-radius: 16px;
	padding: 32px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	border: 1px solid #eee;
`;

const PlanHeader = styled.div`
	text-align: center;
	margin-bottom: 32px;
`;

const PlanName = styled.h2`
	font-size: 24px;
	font-weight: 600;
	color: #333;
	margin-bottom: 16px;
`;

const PlanPrice = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: center;
	gap: 4px;
`;

const Price = styled.span`
	font-size: 48px;
	font-weight: 700;
	color: #ff6900;
`;

const Currency = styled.span`
	font-size: 20px;
	color: #666;
`;

const FeaturesList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0 0 32px 0;
`;

const FeatureItem = styled.li`
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px 0;
	font-size: 16px;
	color: #333;
	border-bottom: 1px solid #f0f0f0;

	&:last-child {
		border-bottom: none;
	}
`;

const CheckIcon = styled.span`
	width: 20px;
	height: 20px;
	background: #ff6900;
	color: white;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	font-weight: bold;
`;

const SubscribeButton = styled.button`
	width: 100%;
	padding: 16px;
	background: #ff6900;
	color: white;
	border: none;
	border-radius: 8px;
	font-size: 18px;
	font-weight: 600;
	cursor: pointer;
	transition: background 0.2s ease;

	&:hover {
		background: #e55a00;
	}
`;

const PaymentModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
`; 