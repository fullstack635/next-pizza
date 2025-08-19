import React, { useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../stores/rootStoreProvider';
import { createPaymentIntent, confirmPayment } from '../../utils/stripe';

const PaymentForm = observer(() => {
	const state = useRootStore();
	const [formData, setFormData] = useState({
		cardNumber: '',
		expiryDate: '',
		cvv: '',
		name: ''
	});
	const [isProcessing, setIsProcessing] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: ''
			}));
		}
	};

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!formData.cardNumber) {
			newErrors.cardNumber = state.LangStore.t('payment.required');
		} else if (formData.cardNumber.replace(/\s/g, '').length < 16) {
			newErrors.cardNumber = 'Invalid card number';
		}

		if (!formData.expiryDate) {
			newErrors.expiryDate = state.LangStore.t('payment.required');
		} else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
			newErrors.expiryDate = 'Invalid expiry date (MM/YY)';
		}

		if (!formData.cvv) {
			newErrors.cvv = state.LangStore.t('payment.required');
		} else if (formData.cvv.length < 3) {
			newErrors.cvv = 'Invalid CVV';
		}

		if (!formData.name) {
			newErrors.name = state.LangStore.t('payment.required');
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		if (!validateForm()) {
			return;
		}

		setIsProcessing(true);

		try {
			// Create payment intent (amount should come from subscription plan)
			const amount = 19.99; // This should be dynamic based on selected plan
			const clientSecret = await createPaymentIntent(amount);

			// Prepare payment method data
			const paymentMethod = {
				type: 'card',
				card: {
					number: formData.cardNumber.replace(/\s/g, ''),
					exp_month: parseInt(formData.expiryDate.split('/')[0]),
					exp_year: parseInt('20' + formData.expiryDate.split('/')[1]),
					cvc: formData.cvv,
				},
				billing_details: {
					name: formData.name,
				},
			};

			// Confirm payment
			await confirmPayment(clientSecret, paymentMethod);
			
			alert(state.LangStore.t('payment.success'));
			// Close modal or redirect
		} catch (error) {
			console.error('Payment error:', error);
			alert(state.LangStore.t('payment.error'));
		} finally {
			setIsProcessing(false);
		}
	};

	const formatCardNumber = (value: string) => {
		const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
		const matches = v.match(/\d{4,16}/g);
		const match = matches && matches[0] || '';
		const parts = [];
		for (let i = 0, len = match.length; i < len; i += 4) {
			parts.push(match.substring(i, i + 4));
		}
		if (parts.length) {
			return parts.join(' ');
		} else {
			return v;
		}
	};

	const formatExpiryDate = (value: string) => {
		const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
		if (v.length >= 2) {
			return v.substring(0, 2) + '/' + v.substring(2, 4);
		}
		return v;
	};

	return (
		<PaymentFormContainer>
			<PaymentHeader>
				<Title>{state.LangStore.t('payment.title')}</Title>
				<SecureBadge>{state.LangStore.t('payment.secure')}</SecureBadge>
			</PaymentHeader>

			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label>{state.LangStore.t('payment.cardNumber')}</Label>
					<Input
						type="text"
						name="cardNumber"
						value={formData.cardNumber}
						onChange={(e) => {
							const formatted = formatCardNumber(e.target.value);
							setFormData(prev => ({ ...prev, cardNumber: formatted }));
						}}
						placeholder="1234 5678 9012 3456"
						maxLength={19}
						error={!!errors.cardNumber}
					/>
					{errors.cardNumber && <ErrorMessage>{errors.cardNumber}</ErrorMessage>}
				</FormGroup>

				<Row>
					<FormGroup>
						<Label>{state.LangStore.t('payment.expiryDate')}</Label>
						<Input
							type="text"
							name="expiryDate"
							value={formData.expiryDate}
							onChange={(e) => {
								const formatted = formatExpiryDate(e.target.value);
								setFormData(prev => ({ ...prev, expiryDate: formatted }));
							}}
							placeholder="MM/YY"
							maxLength={5}
							error={!!errors.expiryDate}
						/>
						{errors.expiryDate && <ErrorMessage>{errors.expiryDate}</ErrorMessage>}
					</FormGroup>

					<FormGroup>
						<Label>{state.LangStore.t('payment.cvv')}</Label>
						<Input
							type="text"
							name="cvv"
							value={formData.cvv}
							onChange={handleInputChange}
							placeholder="123"
							maxLength={4}
							error={!!errors.cvv}
						/>
						{errors.cvv && <ErrorMessage>{errors.cvv}</ErrorMessage>}
					</FormGroup>
				</Row>

				<FormGroup>
					<Label>{state.LangStore.t('payment.name')}</Label>
					<Input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						placeholder="John Doe"
						error={!!errors.name}
					/>
					{errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
				</FormGroup>

				<PayButton type="submit" disabled={isProcessing}>
					{isProcessing ? state.LangStore.t('payment.processing') : state.LangStore.t('buttons.pay')}
				</PayButton>
			</Form>
		</PaymentFormContainer>
	);
});

export default PaymentForm;

const PaymentFormContainer = styled.div`
	background: white;
	border-radius: 16px;
	padding: 32px;
	max-width: 500px;
	width: 90%;
	max-height: 90vh;
	overflow-y: auto;
`;

const PaymentHeader = styled.div`
	text-align: center;
	margin-bottom: 32px;
`;

const Title = styled.h2`
	font-size: 24px;
	font-weight: 600;
	color: #333;
	margin-bottom: 8px;
`;

const SecureBadge = styled.div`
	display: inline-block;
	background: #f0f8ff;
	color: #0066cc;
	padding: 4px 12px;
	border-radius: 20px;
	font-size: 12px;
	font-weight: 500;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const Label = styled.label`
	font-size: 14px;
	font-weight: 500;
	color: #333;
`;

const Input = styled.input<{ error?: boolean }>`
	padding: 12px 16px;
	border: 2px solid ${props => props.error ? '#ff4444' : '#ddd'};
	border-radius: 8px;
	font-size: 16px;
	transition: border-color 0.2s ease;

	&:focus {
		outline: none;
		border-color: #ff6900;
	}

	&::placeholder {
		color: #999;
	}
`;

const Row = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
`;

const ErrorMessage = styled.span`
	color: #ff4444;
	font-size: 12px;
`;

const PayButton = styled.button`
	padding: 16px;
	background: #ff6900;
	color: white;
	border: none;
	border-radius: 8px;
	font-size: 18px;
	font-weight: 600;
	cursor: pointer;
	transition: background 0.2s ease;

	&:hover:not(:disabled) {
		background: #e55a00;
	}

	&:disabled {
		background: #ccc;
		cursor: not-allowed;
	}
`; 