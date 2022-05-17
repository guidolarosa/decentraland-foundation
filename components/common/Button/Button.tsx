import { ReactNode } from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';

interface ButtonProps {
    children?: ReactNode;
    className?: string;
    buttonType?: 'a' | 'button',
    href?: string,
    onClick?: () => void
}

const Button = ({
    children, 
    className,
    buttonType = 'a',
    href = '#'
} : ButtonProps) => {
    
    return buttonType == 'a' ? 
        <StyledButtonLink className={className}>
            {children}
        </StyledButtonLink> :
        <StyledButton className={className}>
            {children}
        </StyledButton>
    
};

const commonStyles = `
    font-size: 2.5rem;
    display: inline-block;
    cursor: pointer;
    height: 10rem;
    line-height: 10rem;
    padding: 0 8rem;
    font-size: 3rem;
    border-radius: 2rem;
    background: ${theme.primary};
    width: fit-content;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: 0.10s ease-in-out all;
    &:hover {
        background: ${theme.primaryButtonHover};
    }
`;

const StyledButton = styled.button<ButtonProps>`
    ${commonStyles}
`;

const StyledButtonLink = styled.a<ButtonProps>`
    ${commonStyles}
`;

export default Button;