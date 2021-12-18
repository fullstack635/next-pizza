import React from 'react'
import Layout from '../components/Layout'
import Main from '../components/Main/Main'
import { ModalBase } from '../components/Modal/ModalBase'
import PopularWidget from '../components/PopularWidget/PopularWidget'
import StoriesWidget from '../components/StoriesWidget/StoriesWidget'

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