import styled from 'styled-components';
import Navbar from 'components/layout/Navbar/Navbar';
import {Flex} from 'rebass'

const Header = ({children, beforeNavbar}) => {
    return (
        <StyledHeader width={"100%"} flexDirection={"column"} alignItems={"center"}>
            {beforeNavbar}
            <Navbar/>
            {children}
        </StyledHeader>
    )
}

const StyledHeader = styled(Flex)``

export default Header;