import React from 'react'
import styled from 'styled-components'

export default function Statistics(): JSX.Element {
    return (
        <SStatistics>
            <InnerStats>
                <StatsSection>
                    <StatsMain>
                        <Money>
                            <MoneyValue>712 219 962</MoneyValue>
                            <MoneyCurrency> ₽</MoneyCurrency>
                        </Money>
                    </StatsMain>
                    <StatsMore>
                        Выручка российской сети в этом месяце. В прошлом —
                        <MoneyValue>2 995 958 933</MoneyValue>
                        <MoneyCurrency> ₽</MoneyCurrency>
                    </StatsMore>
                </StatsSection>
                <StatsSection>
                    <StatsMain>755 пиццерий</StatsMain>
                    <StatsMore>в 15 странах, от Великобритании до Нигерии</StatsMore>
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
    
`

const MoneyCurrency = styled.span`
    margin-left: -2px;
`