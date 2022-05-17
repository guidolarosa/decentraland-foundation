import Image from 'next/image';
import styled from 'styled-components';

const Logo = ({className}) => {
    return (
        <StyledLogo className={className}>
            <Image src="/img/logo.svg" width={215} height={46} alt="Decentraland Foundation"/>
        </StyledLogo>
    )
}

const StyledLogo = styled.div``;

export default Logo;


