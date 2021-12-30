import { AppProps } from 'next/app';
import React from 'react'
import { ThemeProvider } from 'styled-components';
import Workaround from '../components/Workaround';
import { RootStoreProvider } from '../stores/rootStoreProvider';
import { LightTheme } from '../styles/LightTheme';

function App({ Component, pageProps }: AppProps) {
    return (
        <RootStoreProvider>
            <ThemeProvider theme={LightTheme}>
                <Workaround />
                <Component {...pageProps} />
            </ThemeProvider>
        </RootStoreProvider>
    );
}
export default App;
