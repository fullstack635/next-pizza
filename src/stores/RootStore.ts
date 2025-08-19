import { CartStore } from "./CartStore";
import { UiStore } from "./UiStore"
import { LanguageStore } from "./LanguageStore";

export class RootStore {
	CartStore: CartStore;
	UiStore: UiStore;
	LangStore: LanguageStore;

	constructor() {
		this.CartStore = new CartStore(this);
		this.UiStore = new UiStore(this);
		this.LangStore = new LanguageStore(this);
		this.CartStore.init();
		this.UiStore.init();
		this.LangStore.init();
	}
}