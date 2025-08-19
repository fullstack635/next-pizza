import React from 'react'
import styled from 'styled-components'

export default function Navigation(): JSX.Element {
    return (
        <NNavigation>
            <NavigationLinks>
                <LinksSection>
                    <SectionTitle>Next.js Demo</SectionTitle>
                    <Link>About Project</Link>
                    <Link>Features</Link>
                    <Link>Technologies</Link>
                    <Link>Documentation</Link>
                </LinksSection>
                <LinksSection>
                    <SectionTitle>Development</SectionTitle>
                    <Link>TypeScript</Link>
                    <Link>Styled Components</Link>
                    <Link>MobX State</Link>
                </LinksSection>
                <LinksSection>
                    <SectionTitle>Features</SectionTitle>
                    <Link>Multi-language</Link>
                    <Link>Responsive Design</Link>
                    <Link>Modern UI/UX</Link>
                    <Link>Performance</Link>
                </LinksSection>
                <LinksSection>
                    <SectionTitle>Demo</SectionTitle>
                    <Link>Product Catalog</Link>
                    <Link>Language Switcher</Link>
                    <Link>Cart System</Link>
                </LinksSection>
            </NavigationLinks>
            <NavigationRight>
                <MobileAppsContainer>
                    <MobileLink>
                        <MobileImageContainer>
                            <svg width="135" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="135" height="40" rx="8" fill="#000"/>
                                <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#fff" font-family="Arial, sans-serif" font-size="12" font-weight="bold">NEXT.JS</text>
                            </svg>
                        </MobileImageContainer>
                    </MobileLink>
                    <MobileLink>
                        <MobileImageContainer>
                            <svg width="120" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="120" height="40" rx="8" fill="#3178c6"/>
                                <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#fff" font-family="Arial, sans-serif" font-size="10" font-weight="bold">TYPESCRIPT</text>
                            </svg>
                        </MobileImageContainer>
                    </MobileLink>
                </MobileAppsContainer>
                <Contact>
                    <Mail>demo@nextjs-project.com</Mail>
                </Contact>
            </NavigationRight>
        </NNavigation>
    )
}

const NNavigation = styled.div`
    -moz-box-pack: justify;
    justify-content: space-between;
    background-color: transparent;
    padding: 30px 0px 0px;
    width: 1280px;
    margin: 0px auto;
    display: flex;
`

const NavigationLinks = styled.div`
    -moz-box-flex: 1;
    flex-grow: 1;
    height: 100%;
    display: flex;
`

const LinksSection = styled.div`
    display: flex;
    flex-direction: column;
    -moz-box-pack: start;
    justify-content: flex-start;
    min-width: 130px;
    margin-right: 60px;
    margin-bottom: 50px;
`

const SectionTitle = styled.span`
    font-weight: 500;
    letter-spacing: 0.1px;
    margin-bottom: 7px;
`

const Link = styled.a`
    display: inline-block;
    color: rgb(255, 255, 255);
    opacity: 0.7;
    text-decoration: none;
    margin-bottom: 8px;
    letter-spacing: 0.1px;
    &:hover{
        opacity: 1;
    }
`

const NavigationRight = styled.div``

const MobileAppsContainer = styled.div`
    width: 280px;
    height: 100%;
`

const MobileLink = styled.a`
    display: inline-block;
    vertical-align: bottom;
    margin-bottom: 10px;
    margin-right: 8px;
    height: 40px;
    cursor: pointer;
`

const MobileImageContainer = styled.i`
    display: inline-block;
`

const Contact = styled.div`
    margin-top: 10px;
`

const Mail = styled.a`
    color: white;
    opacity: 0.7;
    &:hover{
        opacity: 1;
    }
`

