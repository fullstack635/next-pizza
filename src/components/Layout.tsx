import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

interface LayoutProps {
    children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
