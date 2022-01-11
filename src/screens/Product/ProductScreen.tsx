import React, { useState } from 'react'
import { AddButton, BrandName, ButtonsContainer, DataContainer, DiscountBadge, Image, LargeImageContainer, PreviousPrice, Price, PriceContainer, ProductContainer, ProductDescription, ProductImageContainer, ProductThumbnail, ProductThumbnailContainer, ProductTitle, QuantityButton, Sign } from './ProductScreenStyle'

export const ProductScreen: React.FC = () => {

    const [quantity, setQuantity] = useState(0);


    return (
        <ProductContainer>
            <ProductImageContainer>
                <LargeImageContainer>
                    <Image src={require('./../../assets/images/image-product-1.jpg')} alt="product 1" />
                </LargeImageContainer>
                <ProductThumbnailContainer>
                    <ProductThumbnail src={require('./../../assets/images/image-product-1-thumbnail.jpg')} alt="product 1" />
                    <ProductThumbnail src={require('./../../assets/images/image-product-2-thumbnail.jpg')} alt="product 2" />
                    <ProductThumbnail src={require('./../../assets/images/image-product-3-thumbnail.jpg')} alt="product 3" />
                    <ProductThumbnail src={require('./../../assets/images/image-product-4-thumbnail.jpg')} alt="product 4" />
                </ProductThumbnailContainer>
            </ProductImageContainer>
            <DataContainer>
                <BrandName>SNEAKER COMPANY</BrandName>
                <ProductTitle>FALL LIMITED EDITION SNEAKERS</ProductTitle>
                <ProductDescription>
                    These low-profile sneakers are your perfect  casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </ProductDescription>

                <PriceContainer>
                    <Price>$125.00</Price>
                    <DiscountBadge>50%</DiscountBadge>
                </PriceContainer>
                <PreviousPrice>$250.00</PreviousPrice>

                <ButtonsContainer>
                    <QuantityButton>
                        <Sign text='-' onClick={() => !!quantity && setQuantity(quantity - 1)} />
                        <p className="number">{quantity}</p>
                        <Sign text='+' onClick={() => setQuantity(quantity + 1)} />
                    </QuantityButton>
                    <AddButton text='Add to cart' />
                </ButtonsContainer>
            </DataContainer>
        </ProductContainer>
    )
}
