import { Locale } from './i18n';

export interface ProductTranslation {
	name?: string;
	desc?: string;
}

export type ProductKey = `${'pizza'|'combo'|'snack'|'drink'|'desert'|'other'}:${number}`;

export const productTranslations: Record<Locale, Partial<Record<ProductKey, ProductTranslation>>> = {
	en: {
		// Pizza
		'pizza:1': { name: 'Cheese', desc: 'Mozzarella, cheddar and parmesan cheeses, Alfredo sauce' },
		'pizza:2': { name: 'Pepperoni Fresh', desc: 'Spicy pepperoni, extra mozzarella, tomatoes, tomato sauce' },
		'pizza:3': { name: 'Pesto', desc: 'Chicken, pesto sauce, feta cubes, tomatoes, mozzarella, Alfredo sauce' },
		'pizza:4': { name: 'Ham & Cheese', desc: 'Ham, mozzarella, Alfredo sauce' },
		'pizza:5': { name: 'Carbonara', desc: 'Bacon, cheddar and parmesan, mozzarella, tomatoes, red onion, garlic, Alfredo, Italian herbs' },
		'pizza:6': { name: 'Double Chicken', desc: 'Chicken, mozzarella, Alfredo sauce' },
		'pizza:7': { name: 'Dodo Mix', desc: 'Bacon, chicken, ham, blue cheese, cheddar and parmesan, pesto, feta, tomatoes, red onion, mozzarella, Alfredo, garlic, Italian herbs' },
		'pizza:8': { name: 'Pepperoni', desc: 'Spicy pepperoni, tomato sauce, mozzarella' },
		'pizza:9': { name: 'Margherita', desc: 'Mozzarella, extra tomatoes, Italian herbs, tomato sauce' },
		'pizza:10': { name: 'Ham & Mushrooms', desc: 'Ham, mushrooms, mozzarella, tomato sauce' },
		'pizza:11': { name: 'Hawaiian', desc: 'Ham, pineapple, mozzarella, tomato sauce' },
		'pizza:12': { name: 'Diablo', desc: 'Spicy chorizo, jalapeño, BBQ sauce, meatballs, tomatoes, sweet pepper, red onion, mozzarella, tomato sauce' },
		
		// Combo
		'combo:1': { name: 'Pizza + Drink', desc: 'Any pizza + any drink' },
		'combo:2': { name: 'Pizza + Snack', desc: 'Any pizza + any snack' },
		'combo:3': { name: 'Pizza + Dessert', desc: 'Any pizza + any dessert' },
		'combo:4': { name: 'Full Combo', desc: 'Pizza + drink + snack + dessert' },
		
		// Snacks
		'snack:1': { name: 'French Fries', desc: 'Crispy golden fries with salt' },
		'snack:2': { name: 'Chicken Wings', desc: 'Spicy chicken wings with sauce' },
		'snack:3': { name: 'Garlic Bread', desc: 'Fresh bread with garlic butter' },
		'snack:4': { name: 'Onion Rings', desc: 'Crispy onion rings' },
		
		// Drinks
		'drink:1': { name: 'Cola', desc: 'Refreshing carbonated drink' },
		'drink:2': { name: 'Orange Juice', desc: 'Fresh orange juice' },
		'drink:3': { name: 'Water', desc: 'Pure spring water' },
		'drink:4': { name: 'Lemonade', desc: 'Homemade lemonade' },
		
		// Desserts
		'desert:1': { name: 'Chocolate Cake', desc: 'Rich chocolate cake with cream' },
		'desert:2': { name: 'Ice Cream', desc: 'Vanilla ice cream with toppings' },
		'desert:3': { name: 'Tiramisu', desc: 'Classic Italian dessert' },
		'desert:4': { name: 'Cheesecake', desc: 'Creamy cheesecake with berries' },
		
		// Other
		'other:1': { name: 'Sauce Pack', desc: 'Assorted sauces for your meal' },
		'other:2': { name: 'Napkins', desc: 'Paper napkins' },
		'other:3': { name: 'Utensils', desc: 'Plastic utensils set' },
	},
	pl: {
		// Pizza
		'pizza:1': { name: 'Serowa', desc: 'Mozzarella, cheddar i parmezan, sos Alfredo' },
		'pizza:2': { name: 'Pepperoni fresh', desc: 'Ostra pepperoni, dodatkowa mozzarella, pomidory, sos pomidorowy' },
		'pizza:3': { name: 'Pesto', desc: 'Kurczak, sos pesto, ser feta, pomidory, mozzarella, sos Alfredo' },
		'pizza:4': { name: 'Szynka i ser', desc: 'Szynka, mozzarella, sos Alfredo' },
		'pizza:5': { name: 'Carbonara', desc: 'Boczek, cheddar i parmezan, mozzarella, pomidory, czerwona cebula, czosnek, sos Alfredo, włoskie zioła' },
		'pizza:6': { name: 'Podwójny kurczak', desc: 'Kurczak, mozzarella, sos Alfredo' },
		'pizza:7': { name: 'Dodo Mix', desc: 'Boczek, kurczak, szynka, ser pleśniowy, cheddar i parmezan, pesto, feta, pomidory, czerwona cebula, mozzarella, sos Alfredo, czosnek, włoskie zioła' },
		'pizza:8': { name: 'Pepperoni', desc: 'Ostra pepperoni, sos pomidorowy, mozzarella' },
		'pizza:9': { name: 'Margherita', desc: 'Mozzarella, dodatkowe pomidory, włoskie zioła, sos pomidorowy' },
		'pizza:10': { name: 'Szynka i pieczarki', desc: 'Szynka, pieczarki, mozzarella, sos pomidorowy' },
		'pizza:11': { name: 'Hawajska', desc: 'Szynka, ananas, mozzarella, sos pomidorowy' },
		'pizza:12': { name: 'Diablo', desc: 'Ostre chorizo, jalapeño, sos BBQ, pulpety, pomidory, słodka papryka, czerwona cebula, mozzarella, sos pomidorowy' },
		
		// Combo
		'combo:1': { name: 'Pizza + Napój', desc: 'Dowolna pizza + dowolny napój' },
		'combo:2': { name: 'Pizza + Przekąska', desc: 'Dowolna pizza + dowolna przekąska' },
		'combo:3': { name: 'Pizza + Deser', desc: 'Dowolna pizza + dowolny deser' },
		'combo:4': { name: 'Pełny Zestaw', desc: 'Pizza + napój + przekąska + deser' },
		
		// Snacks
		'snack:1': { name: 'Frytki', desc: 'Chrupiące złote frytki z solą' },
		'snack:2': { name: 'Skrzydełka Kurczaka', desc: 'Ostre skrzydełka kurczaka z sosem' },
		'snack:3': { name: 'Chleb Czosnkowy', desc: 'Świeży chleb z masłem czosnkowym' },
		'snack:4': { name: 'Krążki Cebulowe', desc: 'Chrupiące krążki cebulowe' },
		
		// Drinks
		'drink:1': { name: 'Cola', desc: 'Orzeźwiający napój gazowany' },
		'drink:2': { name: 'Sok Pomarańczowy', desc: 'Świeży sok pomarańczowy' },
		'drink:3': { name: 'Woda', desc: 'Czysta woda źródlana' },
		'drink:4': { name: 'Limonada', desc: 'Domowa limonada' },
		
		// Desserts
		'desert:1': { name: 'Ciasto Czekoladowe', desc: 'Bogate ciasto czekoladowe ze śmietaną' },
		'desert:2': { name: 'Lody', desc: 'Lody waniliowe z dodatkami' },
		'desert:3': { name: 'Tiramisu', desc: 'Klasyczny włoski deser' },
		'desert:4': { name: 'Sernik', desc: 'Kremowy sernik z jagodami' },
		
		// Other
		'other:1': { name: 'Zestaw Sosów', desc: 'Różnorodne sosy do posiłku' },
		'other:2': { name: 'Serwetki', desc: 'Serwetki papierowe' },
		'other:3': { name: 'Sztućce', desc: 'Zestaw sztućców plastikowych' },
	}
}; 