import { } from "mobx"
import { RootStore } from "./RootStore"

export class CartStore {

    root: RootStore
    cart: [];

    constructor(root: RootStore) {
        this.root = root
        this.cart = [];
    }

    init() {

    }
}