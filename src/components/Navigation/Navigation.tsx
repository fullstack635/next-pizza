import React from 'react'
import styled, { DefaultStyledComponent } from 'styled-components'
import Cart from './Inner/Cart'
import ListMenu from './Inner/ListMenu'
import Logo from './Inner/Logo'

export default function Navigation(): JSX.Element {

    const [sticky, setSticky] = React.useState(false);
    const navigationRef = React.useRef<HTMLHeadingElement>(null);

    // sticky observer
    React.useEffect(() => {
        if (navigationRef) {
            const cachedRef = navigationRef.current;
            if (cachedRef) {
                const observer = new IntersectionObserver(
                    ([e]) => setSticky(e.intersectionRatio < 1),
                    { threshold: [1] }
                )
                observer.observe(cachedRef)
                return function () {
                    observer.unobserve(cachedRef)
                }
            }
        }
    }, [])

    return (
        <NNavigation sticky={sticky} ref={navigationRef}>
            <NavInner>
                <Logo sticky={sticky} />
                <ListMenu sticky={sticky} />
                <Cart />
            </NavInner>
        </NNavigation>
    )
}

interface NNavigationProps extends DefaultStyledComponent {
    sticky: boolean;
}

const NNavigation = styled.nav<NNavigationProps>`
    width: 100%;
    position: sticky;
    top: -1px;
    background-color: white;
    z-index: 10;
    border-top: 1px solid transparent;
    box-shadow: ${(props) => props.sticky ? '2px 2px 5px -6px black' : 'none'};
`

const NavInner = styled.div`
position: relative;
width: 1280px;
margin-left: auto;
margin-right: auto;
`

