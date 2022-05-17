import styled from 'styled-components'

type TextProps = {
    children: string,
    className?: string,
    textAlign?: 'center' | 'left' | 'right',
    strong?: boolean,
    fontSize?: string
}

const Text = ({
    children = "Placeholder text", 
    className,
    textAlign = 'left',
    strong = false,
    fontSize = '3rem'
} : TextProps) => {

    return (
        <StyledText 
            className={className}
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
    line-height: 6rem;
    font-weight: 200;
    color: ${props => props.theme.mainTextDim};
    text-align: ${props => props.textAlign};
    font-weight: ${props => props.strong ? '600' : '200'};
`;

export default Text;