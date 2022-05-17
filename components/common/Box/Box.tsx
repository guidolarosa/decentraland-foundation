import { ReactNode } from 'react';
import styled from 'styled-components'

interface BoxProps {
    children?: ReactNode;
    className?: string;
    flex?: boolean;
    flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
    width?: number | string | 'full' | 'half';
    height?: number | string;
    alignItems?: string
    justifyContent?: string
}

const Box = ({
    children, 
    className, 
    flex = true,
    width = '100%',
    height = 'auto',
    flexDirection = 'column',
    alignItems = 'flex-end',
    justifyContent = 'start',
} : BoxProps) => {

    return (
        <StyledBox 
            className={className}
            flex={flex} 
            flexDirection={flexDirection}
            width={width}
            height={height}
            alignItems={alignItems}
            justifyContent={justifyContent}
        >
            {children}
        </StyledBox>
    );
    
};

const StyledBox = styled.div<BoxProps>`
    font-size: 2.5rem;
    display: ${props => props.flex ? 'flex' : 'auto'};
    flex-direction:  ${props => (props.flexDirection)};
    justify-content:  ${props => (props.justifyContent)};
    width: ${props => props.width};
    height: ${props => props.height};
`;

export default Box;