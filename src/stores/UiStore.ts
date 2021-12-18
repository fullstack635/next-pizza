import { action, makeObservable, observable } from "mobx"
import { RootStore } from "./RootStore";

export class UiStore {
    root: RootStore;
    showModal: boolean;

    constructor(rootStore: RootStore) {
        this.root = rootStore;
        this.showModal = false;
    }

    init() {
        makeObservable(this, {
            showModal: observable,
            toggleDark: action
        })
    }

    toggleDark() {
        this.showModal = !this.showModal;
    }
}