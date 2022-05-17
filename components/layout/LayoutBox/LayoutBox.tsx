import { ReactNode } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'utils/theme';

interface LayoutBoxProps {
    children?: ReactNode;
    className?: string;
    width?: 'full' | 'main' | 'padded';
    flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    justifyContent: string,
}

const LayoutBox = ({
    children, 
    className = '',
    width = 'full',
    flexDirection = 'column',
    justifyContent = 'start',
} : LayoutBoxProps) => {

    return (
        <StyledBox 
            className={`${width} ${className}`} 
            flexDirection={flexDirection}
            justifyContent={justifyContent}
        >
            {children}
        </StyledBox>
    );
    
};

const StyledBox = styled.div<LayoutBoxProps>`
    font-size: 2.5rem;
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    width: 100%;
    margin: 0 auto;
    &.main {
        max-width: 182rem;
        @media screen and (max-width: ${breakpoints.xxl}) {
            max-width: 160rem;
        }
        @media screen and (max-width: ${breakpoints.xl}) {
            max-width: unset;
            width: calc(100% - 10rem);
        }
    }
    &.padded {
        max-width: 140rem;
        @media screen and (max-width: ${breakpoints.xxl}) {
            max-width: unset;
            width: calc(100% - 10rem);
        }
    }
`;

export default LayoutBox;