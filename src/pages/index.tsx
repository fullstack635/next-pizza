import React from 'react'
import Layout from '../components/Layout'
import Main from '../components/Main/Main'
import { ModalBase } from '../components/ModalBase'
import PopularWidget from '../components/Widgets/PopularWidget/PopularWidget'
import StoriesWidget from '../components/Widgets/StoriesWidget/StoriesWidget'

export default function Index(): JSX.Element {
    return (
        <>
            <ModalBase />
            <Layout>
                <StoriesWidget />
                <PopularWidget />
                <Main />
            </Layout>
        </>
    )
}