import styled from 'styled-components'
import Logo from 'components/layout/Logo/Logo'
import Link from 'next/link'
import {Flex, Box} from 'rebass'

const Footer = (props) => {
    return (
        <StyledFooter justifyContent="center">
            <Flex width={['90%', '90%', '180rem']} flexDirection="row" justifyContent="space-between" alignItems="center">
                <Logo />
                <Box className="footer-links" flexDirection="row">
                    <Link href="/">About Us</Link>
                    <Link href="/">Terms of Use</Link>
                    <Link href="/">Contact</Link>
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