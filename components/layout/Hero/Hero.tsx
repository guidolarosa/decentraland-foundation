import { ReactNode } from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass' 
import FadeUp from '../FadeUp/FadeUp';

interface HeroProps {
    primaryContentMaxWidth?: string
    
}

interface HeroComponentProps extends HeroProps {
    heroContent: ReactNode | string,
    heroSecondaryContent?: ReactNode | string,
    className?: string,
}

const Hero = ({
    heroContent, 
    heroSecondaryContent, 
    className
} : HeroComponentProps) => {
    return (
        <StyledHero 
            className={className} 
        >
            <FadeUp>
                <Flex dataAos={'fade-up'} flexDirection={'row'} className={'hero-content'} width={['90%', '90%', '180rem']} alignItems={"center"}>
                    <Box className="hero-primary-content">
                        {heroContent}
                    </Box>
                    <Box className="hero-secondary-content">
                        {heroSecondaryContent && heroSecondaryContent}
                    </Box>
                </Flex>
            </FadeUp>
        </StyledHero>
    )
}

const StyledHero = styled(Flex)<HeroProps>`
    .hero-content {
        justify-content: space-between;
    }
`;

export default Hero;