import React from 'react'
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Image, LargeImageContainer, ProductImageContainer, ProductThumbnail, ProductThumbnailContainer } from './SliderStyle'

export const Slider: React.FC = () => {

    const { width } = useWindowDimensions();

    return (
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
    )
}
