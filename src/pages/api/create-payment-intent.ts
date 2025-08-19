import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_your_secret_key_here', {
	apiVersion: '2025-07-30.basil',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	try {
		const { amount, currency = 'usd' } = req.body;

		if (!amount) {
			return res.status(400).json({ message: 'Amount is required' });
		}

		// Create a PaymentIntent with the order amount and currency
		const paymentIntent = await stripe.paymentIntents.create({
			amount: Math.round(amount * 100), // Convert to cents
			currency,
			automatic_payment_methods: {
				enabled: true,
			},
			metadata: {
				integration_check: 'accept_a_payment',
			},
		});

		res.status(200).json({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.error('Error creating payment intent:', error);
		res.status(500).json({ message: 'Error creating payment intent' });
	}
} 