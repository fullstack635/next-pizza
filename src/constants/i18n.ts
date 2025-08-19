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
			addToCart: 'Add to cart'
		},
		common: {
			from: 'from'
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
			addToCart: 'Do koszyka'
		},
		common: {
			from: 'od'
		}
	}
}; 