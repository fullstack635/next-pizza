import { makeAutoObservable, observable } from "mobx"
import { RootStore } from "./RootStore"

export class CartStore {

    root: RootStore

    constructor(root: RootStore) {
        this.root = root
    }

    init() {

    }
}