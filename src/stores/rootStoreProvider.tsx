import React, { createContext, ReactNode, useContext } from "react";
import { RootStore } from "../stores/RootStore";
import { enableStaticRendering } from "mobx-react-lite";

// there is no window object on the server
enableStaticRendering(typeof window === "undefined");

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = "StoreContext";

export function useRootStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider");
    }

    return context;
}

export function RootStoreProvider({ children }: { children: ReactNode }) {
    // only create root store once (store is a singleton)
    const root = store ?? new RootStore();

    return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}