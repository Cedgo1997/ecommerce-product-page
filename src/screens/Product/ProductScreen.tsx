import React from 'react'
import { DataContainer, Image, ProductContainer, ProductImageContainer, ProductThumbnail, ProductThumbnailContainer } from './ProductScreenStyle'

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
                    <p>SNEAKER COMPANY</p>
                    <h2>FALL LIMITED SNEAKERS</h2>
                    <p>These low-profile sneakers are your perfect  casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                    <span><strong>$125.00</strong> 50%</span>
                    <p>$250.00</p>
                </DataContainer>
            </div>
        </ProductContainer>
    )
}
