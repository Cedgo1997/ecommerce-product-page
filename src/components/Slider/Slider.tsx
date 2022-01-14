import React, { useState } from 'react'
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Image, LargeImageContainer, ProductImageContainer, ProductThumbnail, ProductThumbnailContainer } from './SliderStyle'
import { images } from './images';

export const Slider: React.FC = () => {

    const { width } = useWindowDimensions();

    const [image, setImage] = useState(images[0].path);

    const [isActive, setIsActive] = useState(0);

    return (
        <ProductImageContainer>
            {width >= 500 &&
                <>
                    <LargeImageContainer>
                        <Image src={image} alt="product 1" />
                    </LargeImageContainer>
                    <ProductThumbnailContainer>
                        {
                            images
                                .map(
                                    (image, index) => (
                                        <ProductThumbnail
                                            key={index}
                                            active={isActive === index}
                                            onClick={() => {
                                                setImage(image.path);
                                                setIsActive(index);
                                            }}>
                                            <img
                                                src={image.thumbnail}
                                                alt={image.alt}
                                            />
                                        </ProductThumbnail>
                                    ))
                        }
                    </ProductThumbnailContainer>
                </>
            }
        </ProductImageContainer>
    )
}
