import { AppProps } from 'next/app';
import React from 'react'
import { ThemeProvider } from 'styled-components';
import GlobalStyleMobX from '../components/GlobalStyleMobX';
import { RootStoreProvider } from '../stores/rootStoreProvider';
import { LightTheme } from '../styles/LightTheme';

function App({ Component, pageProps }: AppProps) {
    return (
        <RootStoreProvider>
            <ThemeProvider theme={LightTheme}>
                <GlobalStyleMobX />
                <Component {...pageProps} />
            </ThemeProvider>
        </RootStoreProvider>
    );
}
export default App;
