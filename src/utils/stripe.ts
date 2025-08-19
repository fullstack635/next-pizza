import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
// Replace with your actual Stripe publishable key
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_publishable_key_here');

// Stripe configuration
export const stripeConfig = {
	currency: 'usd',
	paymentMethodTypes: ['card'],
	// Add your Stripe account configuration here
};

// Helper function to create payment intent
export const createPaymentIntent = async (amount: number, currency: string = 'usd') => {
	try {
		const response = await fetch('/api/create-payment-intent', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				amount,
				currency,
			}),
		});

		const data = await response.json();
		return data.clientSecret;
	} catch (error) {
		console.error('Error creating payment intent:', error);
		throw error;
	}
};

// Helper function to confirm payment
export const confirmPayment = async (clientSecret: string, paymentMethod: any) => {
	try {
		const stripe = await stripePromise;
		if (!stripe) {
			throw new Error('Stripe not loaded');
		}

		const { error } = await stripe.confirmCardPayment(clientSecret, {
			payment_method: paymentMethod,
		});

		if (error) {
			throw error;
		}

		return { success: true };
	} catch (error) {
		console.error('Error confirming payment:', error);
		throw error;
	}
}; 