import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'

interface LayoutProps {
    children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Header />
            <Navigation />
            {props.children}
            <Footer />
        </>
    )
}
