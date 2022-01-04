import React from 'react'
import { LogoContainer, MainLogo, Nav, NavItem, NavItems, StyledLink } from './NavbarStyle'

export const Navbar = () => {
    return (
        <div>
            <Nav>
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
            </Nav>
        </div>
    )
}
