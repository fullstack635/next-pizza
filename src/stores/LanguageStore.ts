import { action, makeObservable, observable } from 'mobx';
import { i18n, Locale } from '../constants/i18n';
import { RootStore } from './RootStore';

export class LanguageStore {
	root: RootStore;
	locale: Locale;

	constructor(root: RootStore) {
		this.root = root;
		this.locale = 'en';
	}

	init() {
		makeObservable(this, {
			locale: observable,
			setLocale: action,
		});

		if (typeof window !== 'undefined') {
			const saved = window.localStorage.getItem('locale') as Locale | null;
			if (saved === 'en' || saved === 'pl') {
				this.locale = saved;
			}
		}
	}

	setLocale(next: Locale) {
		this.locale = next;
		if (typeof window !== 'undefined') {
			window.localStorage.setItem('locale', next);
		}
	}

	t(path: string): string {
		const parts = path.split('.');
		let node: any = i18n[this.locale];
		for (const part of parts) {
			if (node && Object.prototype.hasOwnProperty.call(node, part)) {
				node = node[part];
			} else {
				return path;
			}
		}
		return typeof node === 'string' ? node : path;
	}
} 