import { AppProps } from 'next/app';
import React from 'react'
import { ThemeProvider } from 'styled-components';
import { RootStoreProvider } from '../stores/rootStoreProvider';
import { Global } from '../styles/Global';
import { LightTheme } from '../styles/LightTheme';

function App({ Component, pageProps }: AppProps) {
    return (
        <RootStoreProvider>
            <ThemeProvider theme={LightTheme}>
                <Global />
                <Component {...pageProps} />
            </ThemeProvider>
        </RootStoreProvider>
    );
}
export default App;
