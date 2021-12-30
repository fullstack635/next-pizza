import { action, computed, makeObservable, observable } from "mobx"
import { ICart, ICartGeneral, ICartPizza, isPizza, PizzaDough, PizzaSize } from "../model/CartModel";
import { RootStore } from "./RootStore"

export class CartStore {

    root: RootStore;
    cart: ICart[];

    constructor(root: RootStore) {
        this.root = root;
        this.cart = [];
    }

    init() {
        makeObservable(this, {
            cart: observable,
            addPizza: action,
            addSimple: action,
            getTotalPrice: computed,
            increaseQuantity: action,
            decreaseQuantity: action,
            removeItem: action,
        });
    };

    addPizza(pizza: ICartPizza): void {
        const cartPizza = this.cart.find((item) => isPizza(item) && item.id === pizza.id && item.dough === pizza.dough && item.size === pizza.size);
        if (cartPizza) {
            cartPizza.quantity++;
            return
        }
        this.cart.push(pizza);
        return
    };

    addSimple(product: ICartGeneral): void {
        const cartProduct = this.cart.find((item) => item.id === product.id);
        if (cartProduct) {
            cartProduct.quantity++
            return
        }
        this.cart.push(product);
        return
    };

    get getTotalPrice(): number {
        if (this.cart.length > 0) {
            return this.cart.map((item) => parseInt(item.price) * item.quantity).reduce((a, b) => a + b);
        }
        else return 0;
    };

    increaseQuantity(product: ICart): void {
        const item = this.cart.find((item) => item === product);
        if (item) {
            item.quantity++;
            return
        }
        return
    }

    decreaseQuantity(product: ICart): void {
        const item = this.cart.find((item) => item === product);
        if (item) {
            if (item.quantity - 1 === 0) {
                this.removeItem(product);
                return
            };
            item.quantity--;
            return
        };
        return
    }

    removeItem(product: ICart): void {
        const item = this.cart.find((item) => item === product);
        if (item) {
            this.cart = this.cart.filter((item) => item != product);
            return
        }
        return
    }
}