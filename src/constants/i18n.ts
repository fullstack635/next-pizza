export type Locale = 'en' | 'pl';

export type I18nDict = Record<string, any>;

export const i18n: Record<Locale, I18nDict> = {
	en: {
		nav: {
			pizza: 'Pizza',
			combo: 'Combo',
			snacks: 'Snacks',
			deserts: 'Desserts',
			drinks: 'Drinks',
			other: 'Other goods',
			sales: 'Promotions',
			contacts: 'Contacts',
			about: 'About',
			careers: 'Jobs at Dodo'
		},
		header: {
			deliveryPizza: 'Pizza delivery',
			city: 'Krasnodar',
			min: 'min'
		},
		right: {
			dodoCoins: 'Dodo coins',
			login: 'Log in'
		},
		cart: {
			title: 'Cart'
		},
		buttons: {
			choose: 'Choose',
			addToCart: 'Add to cart',
			subscribe: 'Subscribe',
			checkout: 'Checkout',
			pay: 'Pay Now'
		},
		common: {
			from: 'from'
		},
		subscription: {
			title: 'Premium Subscription',
			description: 'Get unlimited pizza deliveries and exclusive offers',
			monthly: 'Monthly Plan',
			yearly: 'Yearly Plan',
			price: 'Price',
			perMonth: 'per month',
			perYear: 'per year',
			features: {
				unlimited: 'Unlimited deliveries',
				discount: '20% discount on all orders',
				priority: 'Priority customer support',
				exclusive: 'Exclusive menu items'
			},
			selectPlan: 'Select Plan',
			currentPlan: 'Current Plan',
			cancel: 'Cancel Subscription',
			manage: 'Manage Subscription'
		},
		payment: {
			title: 'Payment Information',
			cardNumber: 'Card Number',
			expiryDate: 'Expiry Date',
			cvv: 'CVV',
			name: 'Cardholder Name',
			secure: 'Secure payment powered by Stripe',
			processing: 'Processing payment...',
			success: 'Payment successful!',
			error: 'Payment failed. Please try again.',
			required: 'This field is required'
		}
	},
	pl: {
		nav: {
			pizza: 'Pizza',
			combo: 'Zestawy',
			snacks: 'Przekąski',
			deserts: 'Desery',
			drinks: 'Napoje',
			other: 'Inne produkty',
			sales: 'Promocje',
			contacts: 'Kontakt',
			about: 'O nas',
			careers: 'Praca w Dodo'
		},
		header: {
			deliveryPizza: 'Dostawa pizzy',
			city: 'Krasnodar',
			min: 'min'
		},
		right: {
			dodoCoins: 'Monety Dodo',
			login: 'Zaloguj się'
		},
		cart: {
			title: 'Koszyk'
		},
		buttons: {
			choose: 'Wybierz',
			addToCart: 'Do koszyka',
			subscribe: 'Subskrybuj',
			checkout: 'Zamów',
			pay: 'Zapłać Teraz'
		},
		common: {
			from: 'od'
		},
		subscription: {
			title: 'Subskrypcja Premium',
			description: 'Otrzymuj nieograniczone dostawy pizzy i ekskluzywne oferty',
			monthly: 'Plan Miesięczny',
			yearly: 'Plan Roczny',
			price: 'Cena',
			perMonth: 'na miesiąc',
			perYear: 'na rok',
			features: {
				unlimited: 'Nieograniczone dostawy',
				discount: '20% zniżki na wszystkie zamówienia',
				priority: 'Priorytetowe wsparcie klienta',
				exclusive: 'Ekskluzywne pozycje menu'
			},
			selectPlan: 'Wybierz Plan',
			currentPlan: 'Obecny Plan',
			cancel: 'Anuluj Subskrypcję',
			manage: 'Zarządzaj Subskrypcją'
		},
		payment: {
			title: 'Informacje o Płatności',
			cardNumber: 'Numer Karty',
			expiryDate: 'Data Ważności',
			cvv: 'CVV',
			name: 'Imię i Nazwisko',
			secure: 'Bezpieczna płatność obsługiwana przez Stripe',
			processing: 'Przetwarzanie płatności...',
			success: 'Płatność udana!',
			error: 'Płatność nieudana. Spróbuj ponownie.',
			required: 'To pole jest wymagane'
		}
	}
}; 