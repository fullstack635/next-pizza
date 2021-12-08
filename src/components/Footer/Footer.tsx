import React from 'react'
import styled from 'styled-components'
import Copyright from './Inner/Copyright'
import Navigation from './Inner/Navigation'
import Secret from './Inner/Secret'
import Statistics from './Inner/Statistics'

export default function Footer(): JSX.Element {
    return (
        <FFooter>
            <Secret />
            <Navigation />
            <Statistics />
            <Copyright />
        </FFooter>
    )
}

const FFooter = styled.footer`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    padding-bottom: 20px;
    font-weight: 400;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: rgb(255, 255, 255);
    background-color: rgb(24, 24, 24);
    overflow: hidden;
    z-index: 0;
`

