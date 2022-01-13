import React, { useState } from 'react'
import { Cart } from '../Cart/Cart'
import { CartButton, CloseButton, LogoContainer, MainLogo, MenuButton, Nav, NavItem, NavItems, ProfileButton, ProfileContainer, StyledLink } from './NavbarStyle'

export const Navbar: React.FC = () => {

    const [showCart, setShowCart] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Nav showMenu={showMenu}>
            {showCart && (<Cart />)}
            <MenuButton onClick={() => setShowMenu(!showMenu)} />
            <LogoContainer>
                <MainLogo />
            </LogoContainer>
            <NavItems showMenu={showMenu}>
                {showMenu && (<CloseButton onClick={() => setShowMenu(!showMenu)} />)}
                <NavItem>
                    <StyledLink to="/collections" >Collections</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/men" >Men</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/women" >Women</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/about" >About</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/contact" >Contact</StyledLink>
                </NavItem>
            </NavItems>
            <ProfileContainer>
                <CartButton onClick={() => setShowCart(!showCart)} />
                <ProfileButton src={require('./../../assets/images/image-avatar.png')} width={35} height={35} />
            </ProfileContainer>
        </Nav>
    )
}
