import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './../../assets/logo/logo.svg';
import { ReactComponent as CartLogo } from './../../assets/icons/icon-cart.svg';
import { ReactComponent as MenuLogo } from './../../assets/icons/icon-menu.svg';
import { ReactComponent as CloseLogo } from './../../assets/icons/icon-close.svg';


interface NavProps {
    showMenu: boolean;
}

interface NavItemsProps {
    showMenu: boolean;
}

interface ButtonProps {
    highlight?: boolean;
}


const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const Nav = styled.nav<NavProps>`
    display: flex;
    height: 65px;
    border-bottom: 2px solid rgba(0,0,0,0.1);

    @media (max-width: 1150px) {
        height: 50px;
        border: none;
        &::before {
            content: '';
            position: fixed;
            right: 0;
            top: 0;
            width: ${(props) => props.showMenu && '100%'};
            height: ${(props) => props.showMenu && '100%'};
            background-color: black;
            opacity: 0.5;
        }
    }

`

/* Nav logo */
export const LogoContainer = styled.div`
    padding-top: 12px;
`

export const MainLogo = styled(Logo)`
`

/* Nav links */
export const NavItems = styled.ul<NavItemsProps>`
    display: flex;
    @media (max-width: 1150px) {
        background-color: white;
        flex-direction: column;
        height: 100%;
        left: 0;
        top: 0;
        position: fixed;
        width: 60%;
        margin: 0;
        z-index: 1;

        visibility: ${props => props.showMenu ? 'visible' : 'hidden'};
        animation: ${props => props.showMenu ? slideIn : slideOut} 0.2s linear;
        transition: visibility 0.2s linear;

        & > :first-child {
            align-self: flex-start;
            padding: 25px 0 25px 0;
        }
    }
`

export const NavItem = styled.li`
    list-style: none;
    margin-right: 25px;
    height: 48px;
    border: none;
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

const Button = styled.button<ButtonProps>`
    background: none;
    border: none;
    margin-right: 25px;
    opacity: ${(props) => props.highlight ? 1 : 0.5};
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

const Notification = styled.div`
    border-radius: 40%;
    background-color: ${({ theme }) => theme.colors.primary.dark};
    width: 15px;
    height: 10px;
    position: relative;
    left: 10px;
    top: 5px;
    & > p {
        color: white;
        font-family: ${({ theme }) => theme.fontFamily.bold};
        font-size: 8px;
    }
`;

export const CartButton = ({ onClick, quantity }: any) => (
    <Button highlight={!!quantity} onClick={onClick}>
        {!!quantity &&
            (<Notification>
                <p>{quantity}</p>
            </Notification>)}
        <CartLogo />
    </Button>
);

export const MenuButton = ({ onClick }: any) => (
    <Button onClick={onClick}><MenuLogo /></Button>
);

export const CloseButton = ({ onClick }: any) => (
    <Button onClick={onClick}><CloseLogo /></Button>
);

