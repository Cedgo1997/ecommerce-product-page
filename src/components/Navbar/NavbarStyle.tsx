import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from './../../assets/logo/logo.svg';
import { ReactComponent as CartLogo } from './../../assets/icons/icon-cart.svg';

export const Nav = styled.nav`
    display: flex;
    height: 65px;
    border-bottom: 2px solid rgba(0,0,0,0.1);
`

/* Nav logo */

export const LogoContainer = styled.div`
    margin-top: 15px;
`

export const MainLogo = styled(Logo)`
`

/* Nav links */
export const NavItems = styled.ul`
    display: flex;
`

export const NavItem = styled.li`
    list-style: none;
    margin-right: 25px;
    height: 48px;
    &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary.dark};
    }
`

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamily.normal};
    font-size: ${({ theme }) => theme.fontSize.small};
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`

/* Cart and Profile */

export const ProfileContainer = styled.div`
    display: flex;
    margin-left: auto;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    background: none;
    border: none;
    margin-right: 25px;
    opacity: 0.5;
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
`

export const CartButton = ({ onClick }: any) => (
    <Button onClick={onClick}><CartLogo /></Button>
);

export const ProfileButton = styled.img`
    border-radius: 50%;
    &:hover {
        outline: ${({ theme }) => theme.colors.primary.dark} solid 2px;
        cursor: pointer;
    }
`