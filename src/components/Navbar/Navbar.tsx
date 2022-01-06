import React, { useState } from 'react'
import { Cart } from '../Cart/Cart'
import { CartButton, LogoContainer, MainLogo, Nav, NavItem, NavItems, ProfileButton, ProfileContainer, StyledLink } from './NavbarStyle'

export const Navbar = () => {

    const [showCart, setShowCart] = useState(false);

    return (
        <>
            <Nav>
                {showCart && (<Cart />)}
                <LogoContainer>
                    <MainLogo />
                </LogoContainer>
                <NavItems>
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
                    <CartButton  onClick={() => setShowCart(!showCart)}/>
                    <ProfileButton src={require('./../../assets/images/image-avatar.png')} width={35} height={35} />
                </ProfileContainer>
            </Nav>
        </>
    )
}
