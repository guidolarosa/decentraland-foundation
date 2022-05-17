import styled from "styled-components";
import Box from "components/common/Box/Box";
import Button from "components/common/Button/Button";
import LayoutBox from "components/layout/LayoutBox/LayoutBox";
import Logo from "components/layout/Logo/Logo";
import Link from "next/link";
import { breakpoints } from "utils/theme";

import { MainNavigation } from 'utils/ui_constants';

const Navbar = (props) => {
  return (
    <StyledNavbar>
      <LayoutBox width="main" className="navbar-inner-container">
        <Logo className="logo" />
        <nav className="main-navigation">
          <ul>
            {MainNavigation.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </LayoutBox>
    </StyledNavbar>
  );
};

const StyledNavbar = styled(Box)`
  padding: 6rem 0 6rem;
  .navbar-inner-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
        li {
          margin-right: 4rem;
          font-size: 2rem;
          height: 10rem;
          padding: 0 2rem;
          height: 5rem;
          border-radius: 0.75rem;
          line-height: 5rem;
          transition: 0.25s ease-in-out all;
          cursor: pointer;
          white-space: nowrap;
          &:hover {
            background: ${props => props.theme.navbarLinkBackgroundHover};
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
