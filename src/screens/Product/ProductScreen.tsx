import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/productContext';
import { currencyFormat } from '../../helpers/currencyFormat';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { AddButton, BrandName, ButtonsContainer, CurrentPrice, DataContainer, DiscountBadge, Image, LargeImageContainer, PreviousPrice, Price, PriceContainer, ProductContainer, ProductDescription, ProductImageContainer, ProductThumbnail, ProductThumbnailContainer, ProductTitle, QuantityButton, Sign } from './ProductScreenStyle'

export const ProductScreen: React.FC = () => {

    const [quantity, setQuantity] = useState(1);

    const [productData, setProductData] = useState({
        name: 'Fall Limited Edition Sneakers',
        price: 125.00,
        quantity
    });

    const { width } = useWindowDimensions();

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
            <ProductImageContainer>
                <LargeImageContainer>
                    <Image src={require('./../../assets/images/image-product-1.jpg')} alt="product 1" />
                </LargeImageContainer>
                {width >= 500 && <ProductThumbnailContainer>
                    <ProductThumbnail src={require('./../../assets/images/image-product-1-thumbnail.jpg')} alt="product 1" />
                    <ProductThumbnail src={require('./../../assets/images/image-product-2-thumbnail.jpg')} alt="product 2" />
                    <ProductThumbnail src={require('./../../assets/images/image-product-3-thumbnail.jpg')} alt="product 3" />
                    <ProductThumbnail src={require('./../../assets/images/image-product-4-thumbnail.jpg')} alt="product 4" />
                </ProductThumbnailContainer>}
            </ProductImageContainer>
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
