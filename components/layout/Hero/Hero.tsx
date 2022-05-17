import { ReactNode } from 'react';
import Heading from 'components/common/Heading/Heading';
import styled from 'styled-components';
import Box from 'components/common/Box/Box';
import LayoutBox from 'components/layout/LayoutBox/LayoutBox';

interface Hero {
    heroContent: ReactNode | string,
    heroSecondaryContent?: ReactNode | string,
    className?: string,
    primaryContentMaxWidth?: string

}

const Hero = ({
    heroContent, 
    heroSecondaryContent, 
    className,
    primaryContentMaxWidth = '120rem'
}) => {
    return (
        <StyledHero className={className} primaryContentMaxWidth={primaryContentMaxWidth} width={'main'}>
            <Box flexDirection={'row'} className={'hero-content'}>
                <Box className="hero-primary-content">
                    {heroContent}
                </Box>
                <Box className="hero-secondary-content">
                    {heroSecondaryContent && heroSecondaryContent}
                </Box>
            </Box>
        </StyledHero>
    )
}

const StyledHero = styled(LayoutBox)`
    .hero-content {
        justify-content: space-between;
        .hero-primary-content {
        }
        .hero-secondary-content {
            width: fit-content;
        }
    }
`;

export default Hero;