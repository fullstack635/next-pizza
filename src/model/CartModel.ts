export type ICart = CartType;

type CartType = ICartPizza | ICartGeneral;

export type PizzaSize = 'sm' | 'md' | 'xl';

export type PizzaDough = 'trad' | 'thin';

export interface ICartPizza {
    id: number;
    quantity: number;
    size: PizzaSize;
    dough: PizzaDough;
    pic: string;
    name: string;
    price: string;
}

export interface ICartGeneral {
    id: number;
    quantity: number;
    pic: string;
    name: string;
    weight: string;
    price: string;
}

export function isPizza(cartItem: CartType): cartItem is ICartPizza {
    return Object.keys(cartItem).some((c) => c === 'dough');
}