import React from 'react'
import { CartButton, LogoContainer, MainLogo, Nav, NavItem, NavItems, ProfileButton, ProfileContainer, StyledLink } from './NavbarStyle'

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
                <ProfileContainer>
                    <CartButton />
                    <ProfileButton src={require('./../../assets/images/image-avatar.png')}  width={35} height={35}/>
                </ProfileContainer>
            </Nav>
        </div>
    )
}
