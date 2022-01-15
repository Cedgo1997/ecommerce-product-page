import React, { useState } from 'react'
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Image, LargeImageContainer, ProductImageContainer, ProductThumbnail, ProductThumbnailContainer, SliderButtons } from './SliderStyle'
import { nextImage, previousImage } from '../../helpers/moveSlider';
import { Modal } from './Modal/Modal';
import { images } from './images';

export const Slider: React.FC = () => {

    const { width } = useWindowDimensions();
    const [image, setImage] = useState<string>(images[0].path);
    const [isActive, setIsActive] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <ProductImageContainer>
            {
                showModal && <Modal setShowModal={setShowModal} firstActive={isActive} />
            }

            <LargeImageContainer onClick={() => width >= 500 && setShowModal(true)}>
                {
                    width <= 500 && (
                        <SliderButtons
                            next={() => nextImage(isActive, setIsActive, setImage)}
                            previous={() => previousImage(isActive, setIsActive, setImage)}
                        />)
                }
                <Image src={image} alt="product 1" />
            </LargeImageContainer>

            {width >= 500 &&
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
            }
        </ProductImageContainer>
    )
}
