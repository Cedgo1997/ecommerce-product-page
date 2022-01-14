import React, { useState } from 'react'
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Image, LargeImageContainer, ProductImageContainer, ProductThumbnail, ProductThumbnailContainer } from './SliderStyle'

export const Slider: React.FC = () => {

    const { width } = useWindowDimensions();

    const images = [
        {
            path: require('./../../assets/images/image-product-1.jpg'),
            thumbnail: require('./../../assets/images/image-product-1-thumbnail.jpg'),
            alt: 'product 1'
        },
        {
            path: require('./../../assets/images/image-product-2.jpg'),
            thumbnail: require('./../../assets/images/image-product-2-thumbnail.jpg'),
            alt: 'product 2'
        },
        {
            path: require('./../../assets/images/image-product-3.jpg'),
            thumbnail: require('./../../assets/images/image-product-3-thumbnail.jpg'),
            alt: 'product 3'
        },
        {
            path: require('./../../assets/images/image-product-4.jpg'),
            thumbnail: require('./../../assets/images/image-product-4-thumbnail.jpg'),
            alt: 'product 4'
        }
    ];

    const [image, setImage] = useState(images[0].path);

    return (
        <ProductImageContainer>
            {width >= 500 &&
                <>
                    <LargeImageContainer>
                        <Image src={image} alt="product 1" />
                    </LargeImageContainer>
                    <ProductThumbnailContainer>
                        {
                            images.map((image, index) => <ProductThumbnail src={image.thumbnail} alt={image.alt} key={index} onClick={() => setImage(image.path)} />)
                        }
                    </ProductThumbnailContainer>
                </>
            }
        </ProductImageContainer>
    )
}
