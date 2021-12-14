import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Main from '../components/Main/Main'
import PopularWidget from '../components/PopularWidget/PopularWidget'
import StoriesWidget from '../components/StoriesWidget/StoriesWidget'

export default function Index(): JSX.Element {
    return (
        <Layout>
            <StoriesWidget />
            <PopularWidget />
            <Main />
        </Layout>
    )
}

const Sample = styled.div`
    height: 100vh;
`