import { action, makeObservable, observable } from "mobx"
import { Pizza, Product } from "../constants/store";
import { RootStore } from "./RootStore";

export type CurrentModalType = 'cart' | 'pizza' | 'simple' | 'combo' | 'none';
export type CurrentProductType = Pizza | Product | 'none';

export class UiStore {
    root: RootStore;
    currentModal: CurrentModalType;
    currentProduct: any;

    constructor(root: RootStore) {
        this.root = root;
        this.currentModal = 'none';
        this.currentProduct = 'none';
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
        this.currentModal = 'none';
        this.currentProduct = 'none';
    }

    setCurrentProduct(product: Pizza | Product) {
        this.currentProduct = product;
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

            case 'other':
                this.showSimpleModal();
            default:
                return;
        }
    }
}
