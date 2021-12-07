import { AppProps } from 'next/app';
import React from 'react'
import { ThemeProvider } from 'styled-components';
import { Global } from '../styles/Global';
import { LightTheme } from '../styles/LightTheme';

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={LightTheme}>
            <Global />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
export default App;