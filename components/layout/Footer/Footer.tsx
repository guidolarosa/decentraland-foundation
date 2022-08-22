import styled from 'styled-components'
import Logo from 'components/layout/Logo/Logo'
import {Flex, Box, Link} from 'rebass'

const footerLinkStyles = {
    mb: ['2rem', '0']
}

const Footer = (props) => {
    return (
        <StyledFooter justifyContent="center">
            <Flex width={['90%', '90%', '180rem']} flexDirection={["column", "row"]} justifyContent="space-between" alignItems={['flex-start', "center"]}>
                <Box mb={['4rem', '0']}>
                    <Logo />
                </Box>
                <Box className="footer-links" display={'flex'} flexDirection={["column", "row"]}>
                    <Link href="/" sx={footerLinkStyles}>About Us</Link>
                    <Link href="/" sx={footerLinkStyles}>Terms of Use</Link>
                    <Link href="/" sx={footerLinkStyles}>Contact</Link>
                </Box>
            </Flex>
        </StyledFooter>
    )
}

const StyledFooter = styled(Flex)`
    padding: 5rem 0;
    background: ${props => props.theme.footerBackground};
    .footer-links {
        width: auto;
        a {
            font-size: 2rem;
            margin-right: 10rem;
            opacity: 0.7;
            &:hover {
                opacity: 1;
            }
        }
    }
`;

export default Footer;