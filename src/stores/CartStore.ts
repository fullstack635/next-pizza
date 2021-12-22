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
            getTotalPrice: observable,
            getItemPrice: observable,
            getItemQuantity: observable,
            increaseQuantity: action,
            decreaseQuantity: action,
            removeItem: action,
        });
    };

    addPizza(pizza: ICartPizza): void {
        this.cart.push(pizza);
        return
    };

    addSimple(product: ICartGeneral): void {
        this.cart.push(product);
        return
    };

    getTotalPrice(): number {
        if (this.cart.length > 0) {
            return this.cart.map((item) => parseInt(item.price) * item.quantity).reduce((a, b) => a + b);
        }
        else return 0;
    };

    getItemPrice(id: number): number {
        const item = this.cart.find((item) => item.id === id)
        if (item) {
            return parseInt(item.price) * item.quantity;
        }
        return 0
    }

    getItemQuantity(id: number): number {
        const item = this.cart.find((item) => item.id === id);
        if (item) {
            return item.quantity;
        }
        return 0;
    }

    increaseQuantity(id: number): void {
        const item = this.cart.find((item) => item.id === id);
        if (item) {
            item.quantity++;
            return
        }
        return
    }

    decreaseQuantity(id: number): void {
        const item = this.cart.find((item) => item.id === id);
        if (item) {
            if (item.quantity - 1 === 0) {
                this.removeItem(id);
                return
            };
            item.quantity--;
            return
        };
        return
    }

    removeItem(id: number): void {
        const item = this.cart.find((item) => item.id === id);
        if (item) {
            this.cart = this.cart.filter((item) => item.id !== id);
            return
        }
        return
    }

    removePizza(id: number, dough: PizzaDough, size: PizzaSize): void {
        let item = this.cart.find((item) => item.id === id);
        if (item) {
            if (isPizza(item)) {
                item = this.cart.find((item) => item)
            }
        }
    }

    removeSimple(id: number): void {
        const item = this.cart.find((item) => item.id === id);
        if (item) {
            this.cart = this.cart.filter((item) => item.id !== id);
            return
        }
        return
    }
}