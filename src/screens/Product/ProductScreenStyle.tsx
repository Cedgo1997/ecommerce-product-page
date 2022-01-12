import styled from "styled-components";
import { ReactComponent as CartLogo } from './../../assets/icons/icon-cart.svg';

/* IMAGES */
export const ProductContainer = styled.div`
    display: flex;
    margin-top: 5%;
    width: 100%;
    justify-content: center;

    @media (max-width: 1150px) {
        flex-direction: column;
    }
`


export const ProductImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LargeImageContainer = styled.div`
    width: 450px;
    height: 460px;
`

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 5%;
`

export const ProductThumbnailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 450px;
`

export const ProductThumbnail = styled.img`
    border-radius: 10%;
    width: 85px;
    height: 85px;
    margin-top: 3%;
`

/* PRODUCT DATA */
export const DataContainer = styled.div`
    margin-top: 10%;
    width: 450px;
    margin-left: 100px;
`

export const BrandName = styled.p`
    font-size: 10px;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.primary.dark};
`

export const ProductTitle = styled.h1`
    font-family: ${({ theme }) => theme.fontFamily.bold};
    font-size: 38px;
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

/* ADD BUTTON AND ITEM QUANTITY */

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary.dark};
    border-radius: 5px;
    border: none;
    box-shadow: 0px 5px 15px 0px ${({ theme }) => theme.colors.primary.dark};
    display: flex;
    justify-content: center;
    width: 60%;
    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
    & > p {
        color: white;
        font-family: ${({ theme }) => theme.fontFamily.bold};
        margin: 10px 0 10px 0;
    }
`
export const CartIcon = styled(CartLogo)`
    fill: white;
    align-self: center;
    padding-right: 2%;
`

export const AddButton = ({ text }: any) => (
    <Button>
        <CartIcon />
        <p>{text}</p>
    </Button>
)


const SignButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.primary.dark};
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
    & > p {
        margin: 0;
        font-family: ${({ theme }) => theme.fontFamily.bold};
        font-size: ${({ theme }) => theme.fontSize.large};
    }
`

export const Sign = ({ text, onClick }: any) => (
    <SignButton onClick={onClick}>
        <p>{text}</p>
    </SignButton>
)

export const QuantityButton = styled.div`
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    width: 20%;
    background-color: ${({ theme }) => theme.colors.secondary.lightest};
    padding: 0 15px 0 15px;
    margin: 0 20px 0 0;
    
    & > .number {
        align-self: center;
        font-family: ${({ theme }) => theme.fontFamily.bold};
        margin: 10px 0 10px 0;
    }
`