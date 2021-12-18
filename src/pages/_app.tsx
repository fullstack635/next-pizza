import { AppProps } from 'next/app';
import React, { createContext } from 'react'
import { ThemeProvider } from 'styled-components';
import { RootStore } from '../stores/RootStore';
import { Global } from '../styles/Global';
import { LightTheme } from '../styles/LightTheme';

export const AppContext = createContext<RootStore | undefined>(undefined);

function App({ Component, pageProps }: AppProps) {
    return (
        <AppContext.Provider value={new RootStore()}>
            <ThemeProvider theme={LightTheme}>
                <Global />
                <Component {...pageProps} />
            </ThemeProvider>
        </AppContext.Provider>
    );
}
export default App;

export function useRootStore() {
    const context = React.useContext(AppContext)
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider")
    }
    return context
}