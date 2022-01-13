import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './../../assets/logo/logo.svg';
import { ReactComponent as CartLogo } from './../../assets/icons/icon-cart.svg';
import { ReactComponent as MenuLogo } from './../../assets/icons/icon-menu.svg';
import { ReactComponent as CloseLogo } from './../../assets/icons/icon-close.svg';

interface NavItems {
    showMenu: boolean;
}

export const Nav = styled.nav`
    display: flex;
    height: 65px;
    border-bottom: 2px solid rgba(0,0,0,0.1);

    @media (min-width: 1150px) {
        & > Button {
            display: none;
        }
    }
`

/* Nav logo */
export const LogoContainer = styled.div`
    margin-top: 15px;
`

export const MainLogo = styled(Logo)`
    margin-top: 5px;
`

/* Nav links */
export const NavItems = styled.ul<NavItems>`
    display: flex;

    @media (max-width: 1150px) {
        display: ${(props) => props.showMenu ? 'flex' : 'none'};
        position: absolute;
        flex-direction: column;
        background-color: white;
        width: 60%;
        height: 100%;
        left: 0;
        & > :first-child {
            align-self: flex-start;
            margin: 25px 0 25px 0;
        }
    }
`

export const NavItem = styled.li`
    list-style: none;
    margin-right: 25px;
    height: 48px;
    &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary.dark};
    }

    @media (max-width: 1150px) {
        margin-left: 5px;
        &:hover {
            border: none;
        }
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
    @media (max-width: 1150px) {
        font-family: ${({ theme }) => theme.fontFamily.bold};
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

export const ProfileButton = styled.img`
    border-radius: 50%;
    &:hover {
        outline: ${({ theme }) => theme.colors.primary.dark} solid 2px;
        cursor: pointer;
    }
`

export const CartButton = ({ onClick }: any) => (
    <Button onClick={onClick}><CartLogo /></Button>
);

export const MenuButton = ({ onClick }: any) => (
    <Button onClick={onClick}><MenuLogo /></Button>
);

export const CloseButton = ({ onClick }: any) => (
    <Button onClick={onClick}><CloseLogo /></Button>
);

