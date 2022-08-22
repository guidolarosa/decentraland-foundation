import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Button from "components/common/Button/Button";
import Logo from "components/layout/Logo/Logo";
import { Flex, Box, Link } from 'rebass';
import { breakpoints } from "utils/theme";
import { FadeDown } from 'components/layout/Fade/Fade'
import { MainNavigation } from 'utils/ui_constants';

const Navbar = () => {
  const highlighterRef = useRef(null);
  const linkContainerRef = useRef(null);

  const handleLinkHover = (e) => {
    let hoveredElement = e.target;
    let hoveredElementRect = 
      hoveredElement
        .getBoundingClientRect();
    let hoveredElementWidth = hoveredElementRect.width;
    let hoveredElementLeftEdge = hoveredElementRect.x;
    
    let containerLeftEdge = 
      linkContainerRef
        .current
        .getBoundingClientRect()
        .x;
    let offset = hoveredElementLeftEdge - containerLeftEdge;
    highlighterRef.current.style.width = hoveredElementWidth + 'px';
    highlighterRef.current.style.left = offset + 'px';
  };
  const router = useRouter();
  
  return (
    <StyledNavbar width={"100%"} justifyContent="center">
      <FadeDown>
        <Flex width={['90%', null, null, '180rem']} mx={'auto'}  className="navbar-inner-container" justifyContent={"space-between"} alignItems={"center"}>
            <Link href="/" mr={"auto"}>
              <Logo className="logo" />
            </Link>
            <nav className="main-navigation" ref={linkContainerRef}>
              <ul>
                {MainNavigation.map((link) => (
                  <li 
                    key={link.label} 
                    onMouseEnter={handleLinkHover} 
                    onClick={() => {
                      if (link.scrollTo && document.querySelector('#' + link.id)) {
                        document.querySelector('#' + link.id).scrollIntoView()
                      } else {
                        router.push('/#' + link.id)
                      }
                    }}>
                    <Link href={link.scrollTo ? null : link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                <div className="highlighter" ref={highlighterRef}/>
              </ul>
            </nav>
        </Flex>
      </FadeDown>
    </StyledNavbar>
  );
};

const StyledNavbar = styled(Flex)`
  padding: 6rem 0 6rem;
  /* background: ${props => props.theme.primary}; */
  /* border-bottom: 1px solid gray; */
  .navbar-inner-container {
    .logo {
      width: 40rem;
    }
    .main-navigation {
      @media screen and (max-width: ${breakpoints.l}) {
        display: none;
      }
      ul {
        display: flex;
        list-style: none;
        position: relative;
        &:hover {
          .highlighter {
            opacity: 1;
          }
        }
        .highlighter {
          position: absolute;
          height: 5rem;
          background: white;
          position: absolute;
          pointer-events: none;
          background: ${props => props.theme.navbarLinkBackgroundHover};
          z-index: 1;
          border-radius: 1rem;
          transition: 0.2s ease-in-out all;
          opacity: 0;
        }
        li {
          margin-right: 4rem;
          font-size: 2rem;
          height: 10rem;
          padding: 0 2rem;
          height: 5rem;
          border-radius: 0.75rem;
          line-height: 5rem;
          cursor: pointer;
          white-space: nowrap;
          position: relative;
          z-index: 2;
          &:hover {
           
          }
          &:active {
            transition: 0s ease-in-out all;
            background: ${props => props.theme.navbarLinkBackgroundActive};
          }
          .link-decoration {
            margin-right: 1rem;
            color: ${props => props.theme.mainTextDim};
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
`;

export default Navbar;
