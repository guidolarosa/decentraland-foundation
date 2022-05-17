import styled from 'styled-components'

type TextProps = {
    children: string,
    className?: string,
    textAlign?: 'center' | 'left' | 'right',
    strong?: boolean,
    fontSize?: string,
    size?: 'small' | 'medium' | 'large'
}

const Text = ({
    children = "Placeholder text", 
    className,
    textAlign = 'left',
    strong = false,
    fontSize = '3rem',
    size = 'medium'
} : TextProps) => {

    return (
        <StyledText 
            className={`${className} ${size}`}
            textAlign={textAlign}
            strong={strong}
            fontSize={fontSize}
        >
            {children}
        </StyledText>
    );
    
};

const StyledText = styled.p`
    font-size: ${props => props.fontSize};
    margin-bottom: 6rem;
    font-weight: 200;
    color: ${props => props.theme.mainTextDim};
    text-align: ${props => props.textAlign};
    font-weight: ${props => props.strong ? '600' : '200'};
    &.small {
        font-size: 2.5rem;
        line-height: 5rem;
        margin-bottom: 4rem;
    }
    &.medium {
        font-size: 3rem;
        line-height: 6rem;
    }
    &.large {
        font-size: 3.5rem;
        line-height: 7rem;
    }
`;

export default Text;