import React from 'react'
import styled from 'styled-components'

export default function Statistics(): JSX.Element {
    return (
        <SStatistics>
            <InnerStats>
                <StatsSection>
                    <StatsMain>
                        <Money>
                            <MoneyValue>Next.js</MoneyValue>
                            <MoneyCurrency> Demo</MoneyCurrency>
                        </Money>
                    </StatsMain>
                    <StatsMore>
                        Professional React/Next.js project for Tomek
                        <br />
                        <MoneyValue>Multi-language Support</MoneyValue>
                        <MoneyCurrency> • Modern UI/UX</MoneyCurrency>
                    </StatsMore>
                </StatsSection>
                <StatsSection>
                    <StatsMain>Built with ❤️</StatsMain>
                    <StatsMore>Next.js • TypeScript • Styled Components • MobX</StatsMore>
                </StatsSection>
            </InnerStats>
        </SStatistics>
    )
}

const SStatistics = styled.div`
    -moz-box-pack: justify;
    justify-content: space-between;
    display: flex;
    width: 1280px;
    margin: 0px auto;
`

const InnerStats = styled.div`
    padding-bottom: 27px;
    display: flex;
`

const StatsSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 29%;
    margin-right: 60px;
`

const StatsMain = styled.span`
    font-weight: 400;
    font-size: 26px;
`

const StatsMore = styled.span`
    opacity: 0.5;
    font-size: 16px;
`

const Money = styled.span`
    white-space: nowrap;
`

const MoneyValue = styled.span`
    color: #ff6900;
`

const MoneyCurrency = styled.span`
    margin-left: -2px;
`