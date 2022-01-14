import React, { useContext, useEffect, useState } from 'react'
import { Slider } from '../../components/Slider/Slider';
import { ProductContext } from '../../context/productContext';
import { currencyFormat } from '../../helpers/currencyFormat';
import {
    AddButton,
    BrandName,
    ButtonsContainer,
    CurrentPrice,
    DataContainer,
    DiscountBadge,
    PreviousPrice,
    Price,
    PriceContainer,
    ProductContainer,
    ProductDescription,
    ProductTitle,
    QuantityButton,
    Sign
} from './ProductScreenStyle'

export const ProductScreen: React.FC = () => {

    const [quantity, setQuantity] = useState(1);

    const [productData, setProductData] = useState({
        name: 'Fall Limited Edition Sneakers',
        price: 125.00,
        quantity
    });


    useEffect(() => {
        setProductData((state) => {
            return {
                ...state,
                quantity
            }
        })
    }, [quantity]);

    const { addProduct } = useContext(ProductContext);

    return (
        <ProductContainer>
            <Slider />
            <DataContainer>
                <BrandName>SNEAKER COMPANY</BrandName>
                <ProductTitle>{productData.name}</ProductTitle>
                <ProductDescription>
                    These low-profile sneakers are your perfect  casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </ProductDescription>

                <PriceContainer>
                    <CurrentPrice>
                        <Price>{currencyFormat(productData.price * productData.quantity)}</Price>
                        <DiscountBadge>50%</DiscountBadge>
                    </CurrentPrice>
                    <PreviousPrice>{currencyFormat((productData.price * 2) * productData.quantity)}</PreviousPrice>
                </PriceContainer>

                <ButtonsContainer>
                    <QuantityButton>
                        <Sign text='-' onClick={() => !!(quantity - 1) && setQuantity(quantity - 1)} />
                        <p className="number">{quantity}</p>
                        <Sign text='+' onClick={() => setQuantity(quantity + 1)} />
                    </QuantityButton>
                    <AddButton text='Add to cart' onClick={() => addProduct(productData)} />
                </ButtonsContainer>
            </DataContainer>
        </ProductContainer>
    )
}
