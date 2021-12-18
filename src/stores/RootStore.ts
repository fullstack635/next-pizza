import { CartStore } from "./CartStore";
import { UiStore } from "./UiStore"

export class RootStore {
    CartStore: CartStore;
    UiStore: UiStore;

    constructor() {
        this.CartStore = new CartStore(this)
        this.UiStore = new UiStore(this)

        this.CartStore.init()
        this.UiStore.init()
    }
}