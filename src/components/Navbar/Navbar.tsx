import React, { useContext, useState } from 'react'
import { HashRouter } from 'react-router-dom';
import { ProductContext } from '../../context/productContext';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Cart } from '../Cart/Cart'
import { CartButton, CloseButton, LogoContainer, MainLogo, MenuButton, Nav, NavItem, NavItems, ProfileButton, ProfileContainer, StyledLink } from './NavbarStyle'

export const Navbar: React.FC = () => {

    const [showCart, setShowCart] = useState<boolean>(false);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const { width } = useWindowDimensions();
    const { products } = useContext(ProductContext);

    return (
        <Nav showMenu={showMenu}>
            <Cart showCart={showCart} />
            {width <= 1150 && <MenuButton onClick={() => setShowMenu(!showMenu)} />}
            <LogoContainer>
                <MainLogo />
            </LogoContainer>
            <NavItems showMenu={showMenu}>
                {width <= 1150 && (<CloseButton onClick={() => setShowMenu(!showMenu)} />)}
                <NavItem>
                    <StyledLink to="#" >Collections</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="#" >Men</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="#" >Women</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="#" >About</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="#" >Contact</StyledLink>
                </NavItem>
            </NavItems>
            <ProfileContainer>
                <CartButton onClick={() => setShowCart(!showCart)} quantity={products.length} />
                <ProfileButton src={require('./../../assets/images/image-avatar.png')} width={35} height={35} />
            </ProfileContainer>
        </Nav>
    )
}
