import React from 'react'
import { AddButton, BrandName, CartIcon, DataContainer, DiscountBadge, Image, PreviousPrice, Price, PriceContainer, ProductContainer, ProductDescription, ProductImageContainer, ProductThumbnail, ProductThumbnailContainer, ProductTitle } from './ProductScreenStyle'

export const ProductScreen = () => {
    return (
        <ProductContainer>
            <div>
                <ProductImageContainer>
                    <Image src={require('./../../assets/images/image-product-1.jpg')} alt="product 1" />
                </ProductImageContainer>
                <ProductThumbnailContainer>
                    <ProductThumbnail src={require('./../../assets/images/image-product-1-thumbnail.jpg')} alt="product 1" />
                    <ProductThumbnail src={require('./../../assets/images/image-product-2-thumbnail.jpg')} alt="product 2" />
                    <ProductThumbnail src={require('./../../assets/images/image-product-3-thumbnail.jpg')} alt="product 3" />
                    <ProductThumbnail src={require('./../../assets/images/image-product-4-thumbnail.jpg')} alt="product 4" />
                </ProductThumbnailContainer>
            </div>
            <div>
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

                    <AddButton>
                        <CartIcon />
                        <p>Add to Cart</p>
                    </AddButton>
                </DataContainer>
            </div>
        </ProductContainer>
    )
}
