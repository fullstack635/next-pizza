import { action, makeObservable, observable } from "mobx"
import { Combo, Pizza, Product } from "../constants/store";
import { RootStore } from "./RootStore";

export type CurrentModalType = 'cart' | 'pizza' | 'simple' | 'combo' | undefined;
export type CurrentProductType = Pizza | Product | Combo | undefined;

export class UiStore {
    root: RootStore;
    currentModal: CurrentModalType;
    currentProduct: CurrentProductType;

    constructor(root: RootStore) {
        this.root = root;
        this.currentModal = undefined;
        this.currentProduct = undefined;
    };

    init() {
        makeObservable(this, {
            currentModal: observable,
            currentProduct: observable,
            showPizzaModal: action,
            showSimpleModal: action,
            showCartModal: action,
            hideModal: action,
            setCurrentProduct: action
        });
    };

    showPizzaModal() {
        this.currentModal = 'pizza';
    };

    showSimpleModal() {
        this.currentModal = 'simple';
    }

    showCartModal() {
        this.currentModal = 'cart';
    }

    hideModal() {
        this.currentModal = undefined;
        this.currentProduct = undefined;
    }

    setCurrentProduct(product: CurrentProductType) {
        this.currentProduct = product;
        if (product) {
            switch (product.type) {
                case 'pizza':
                    this.showPizzaModal();
                    break;
                case 'snack':
                    this.showSimpleModal();
                    break;
                case 'drink':
                    this.showSimpleModal();
                    break;
                case 'desert':
                    this.showSimpleModal();
                    break;
                case 'other':
                    this.showSimpleModal();
                default:
                    return;
            }
        }
        return
    }
}
