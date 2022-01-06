import styled from "styled-components";
import { ReactComponent as CartLogo } from './../../assets/icons/icon-cart.svg';


/* IMAGES */
export const ProductContainer = styled.div`
    display: flex;
    margin-top: 5%;
    margin-left: 5%;
`

export const ProductImageContainer = styled.div``

export const Image = styled.img`
    width: 75%;
    height: 80%;
    border-radius: 5%;
`

export const ProductThumbnailContainer = styled.div``

export const ProductThumbnail = styled.img`
    border-radius: 10%;
    width: 15%;
    height: 15%;
    margin-right: 5%;
    margin-top: 3%;
`

/* PRODUCT DATA */
export const DataContainer = styled.div`
    padding-right: 10%;
    margin-top: 10%;
`

export const BrandName = styled.p`
    font-size: 10px;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.primary.dark};
`

export const ProductTitle = styled.h1`
    font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const ProductDescription = styled.p`
    font-family: ${({ theme }) => theme.fontFamily.normal};
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
`
export const PriceContainer = styled.div`
    display: flex;
`

export const Price = styled.h2`
    margin: 0;
`

export const DiscountBadge = styled.p`
    align-self: center;
    background-color: ${({ theme }) => theme.colors.primary.light};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primary.dark};
    font-family: ${({ theme }) => theme.fontFamily.bold};
    font-size: ${({ theme }) => theme.fontSize.small};
    margin: 0 0 0 15px;
    padding: 2px 3px 2px 3px;
`

export const PreviousPrice = styled.p`
    margin: 5px 0 0 0;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    font-size: ${({ theme }) => theme.fontSize.small};
    opacity: 0.5;
    text-decoration: line-through;
`

/* Add Button and item quantity */

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`

export const AddButton = styled.div`
    background-color: ${({ theme }) => theme.colors.primary.dark};
    border-radius: 15px;
    border: none;
    display: flex;
    justify-content: center;
    width: 60%;
    & > p {
        font-family: ${({ theme }) => theme.fontFamily.bold};
        color: white;
        margin: 10px 0 10px 0;
    }
`

export const CartIcon = styled(CartLogo)`
    fill: white;
    align-self: center;
    padding-right: 2%;
`

export const QuantityButton = styled.div`
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    width: 20%;
    background-color: ${({ theme }) => theme.colors.secondary.lightest};
    padding: 0 15px 0 15px;
    margin: 0 20px 0 0;
    & > p {
        font-family: ${({ theme }) => theme.fontFamily.bold};
        margin: 10px 0 10px 0;
    }
    & > .sign {
        color: ${({ theme }) => theme.colors.primary.dark};
        font-size: ${({ theme }) => theme.fontSize.large};
        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
    }
    & > .number {
        align-self: center;
    }
`