import styled from 'styled-components';
import Link from 'next/link';
import { Flex } from 'rebass';

const TopBar = ({children, href}) => {
    return (
        <StyledTopBar flexDirection='row' dataAos="fade-down" width={"100%"}>
            <div className="circle"/>
            <Link href={href}>
                {children}
            </Link>
            <div className="circle"/>
        </StyledTopBar>
    )
}

const StyledTopBar = styled(Flex)`
    height: 5rem;
    display: inline-block;
    background: ${props => props.theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 500;
    .circle {
        margin: 0 2rem;
        width: 1.5rem;
        height: 1.5rem;
        background: black;
        border-radius: 2rem;
    }
`;

export default TopBar;