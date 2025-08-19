import React from 'react'
import styled from 'styled-components'

export default function Copyright(): JSX.Element {
    return (
        <CCopyright>
            <CopyrightContainer>
                <Logo>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305.8 64">
                        <rect width="305.8" height="64" rx="8" fill="#000"/>
                        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#fff" font-family="Arial, sans-serif" font-size="18" font-weight="bold">NEXT.JS DEMO</text>
                    </svg>
                </Logo>
                <CopyrightText>© 2025 • Built for Tomek</CopyrightText>
            </CopyrightContainer>
            <GeneralLinks>
                <Link>
                    Documentation
                </Link>
                <Link>
                    GitHub
                </Link>
                <Link>
                    Portfolio
                </Link>
            </GeneralLinks>
            <SocialLinks>
                <IconLink>
                    <IconContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                            <path d="M29.56,24.55a5,5,0,0,0-5,5v80.88a5,5,0,0,0,5,5H73.1V80.26H61.25V66.53H73.1V56.41c0-11.74,7.17-18.13,17.65-18.13a97.08,97.08,0,0,1,10.58.54V51.09H94.07c-5.7,0-6.8,2.71-6.8,6.68v8.76h13.59L99.08,80.26H87.27v35.2h23.17a5,5,0,0,0,5-5V29.56a5,5,0,0,0-5-5H29.56Z"></path>
                        </svg>
                    </IconContainer>
                </IconLink>
                <IconLink>
                    <IconContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                            <path d="M49.91,22.28A27.69,27.69,0,0,0,22.28,50V90a27.68,27.68,0,0,0,27.62,27.69H90.09A27.68,27.68,0,0,0,117.72,90V50a27.69,27.69,0,0,0-27.62-27.7H49.91Zm0,8.2H90.09A19.34,19.34,0,0,1,109.54,50V90a19.33,19.33,0,0,1-19.44,19.49H49.91A19.33,19.33,0,0,1,30.47,90V50A19.33,19.33,0,0,1,49.91,30.49Zm45.71,8.2a5.74,5.74,0,1,0,5.72,5.74A5.73,5.73,0,0,0,95.61,38.69ZM70,45.43A24.57,24.57,0,1,0,94.52,70,24.6,24.6,0,0,0,70,45.43Zm0,8.2A16.37,16.37,0,1,1,53.67,70,16.29,16.29,0,0,1,70,53.63Z"></path>
                        </svg>
                    </IconContainer>
                </IconLink>
                <IconLink>
                    <IconContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.481 95.481">
                            <g>
                                <path d="M43.041,67.254c-7.402-0.772-14.076-2.595-19.79-7.064c-0.709-0.556-1.441-1.092-2.088-1.713
	c-2.501-2.402-2.753-5.153-0.774-7.988c1.693-2.426,4.535-3.075,7.489-1.682c0.572,0.27,1.117,0.607,1.639,0.969
	c10.649,7.317,25.278,7.519,35.967,0.329c1.059-0.812,2.191-1.474,3.503-1.812c2.551-0.655,4.93,0.282,6.299,2.514
	c1.564,2.549,1.544,5.037-0.383,7.016c-2.956,3.034-6.511,5.229-10.461,6.761c-3.735,1.448-7.826,2.177-11.875,2.661
	c0.611,0.665,0.899,0.992,1.281,1.376c5.498,5.524,11.02,11.025,16.5,16.566c1.867,1.888,2.257,4.229,1.229,6.425
	c-1.124,2.4-3.64,3.979-6.107,3.81c-1.563-0.108-2.782-0.886-3.865-1.977c-4.149-4.175-8.376-8.273-12.441-12.527
	c-1.183-1.237-1.752-1.003-2.796,0.071c-4.174,4.297-8.416,8.528-12.683,12.735c-1.916,1.889-4.196,2.229-6.418,1.15
	c-2.362-1.145-3.865-3.556-3.749-5.979c0.08-1.639,0.886-2.891,2.011-4.014c5.441-5.433,10.867-10.88,16.295-16.322
	C42.183,68.197,42.518,67.813,43.041,67.254z"></path>
                                <path d="M47.55,48.329c-13.205-0.045-24.033-10.992-23.956-24.218C23.67,10.739,34.505-0.037,47.84,0
	c13.362,0.036,24.087,10.967,24.02,24.478C71.792,37.677,60.889,48.375,47.55,48.329z M59.551,24.143
	c-0.023-6.567-5.253-11.795-11.807-11.801c-6.609-0.007-11.886,5.316-11.835,11.943c0.049,6.542,5.324,11.733,11.896,11.709
	C54.357,35.971,59.573,30.709,59.551,24.143z"></path>
                            </g>
                        </svg>
                    </IconContainer>
                </IconLink>
            </SocialLinks>
        </CCopyright>
    )
}

const CCopyright = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 25px;
    color: rgba(255, 255, 255, 0.7);
    width: 1280px;
    margin: 0px auto;
`;

const CopyrightContainer = styled.div`
    color: rgba(255, 255, 255, 0.7);
    align-items: center;
    margin-right: 16px;
`;

const Logo = styled.i`
    display: inline-block;
    vertical-align: top;
    text-align: center;
    font-size: 0px;
    line-height: 0;
    font-style: normal;
    fill: rgb(255, 255, 255);
    width: 110px;
    opacity: 0.7;
    margin-right: 8px;
    margin-bottom: -1px;
    color: rgba(255, 255, 255, 0.7);
`;

const CopyrightText = styled.span`
    color: rgba(255, 255, 255, 0.7);
`;

const GeneralLinks = styled.div`
    display: flex;
    flex-grow: 1;
`;

const Link = styled.a`
    margin-right: 16px;
    display: inline-block;
    color: rgb(255, 255, 255);
    text-decoration: none;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`;

const SocialLinks = styled.div`
    align-items: center;
    justify-content: flex-end;
    display: flex;
`;

const IconLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin-left: 8px;
    border-radius: 4px;
    background-color: rgba(196, 196, 196, 0.2);
    overflow: hidden;
    cursor: pointer;
    color: rgb(255, 255, 255);
    text-decoration: none;
    :hover {
        background-color: rgba(196, 196, 196, 0.6);
    }
`;

const IconContainer = styled.i`
    width: 24px;
    height: 25px;
    fill: rgba(255, 255, 255, 0.7);
    display: inline-block;
    vertical-align: top;
    text-align: center;
    font-size: 0px;
    line-height: 0;
    font-style: normal;
    color: rgb(255, 255, 255);
    :hover {
        fill: rgba(255, 255, 255, 1);
    }
`;