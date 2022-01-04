import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`

`
export const NavItems = styled.ul`
    display: flex;
    height: 50px;
    border-bottom: 2px solid rgba(0,0,0,0.1);
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