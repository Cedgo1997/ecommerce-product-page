import React, { useState } from 'react'
import { images } from '../images'
import { CloseModal, ImageWrapper, ModalContainer, ModalImage, ModalImageContainer, ModalThumbnail, ModalThumbnailContainer, SliderButton } from './ModalStyle'

interface ModalProps {
    setShowModal: Function;
    firstActive: number;
};

export const Modal: React.FC<ModalProps> = ({ setShowModal, firstActive }) => {

    const [image, setImage] = useState(images[firstActive].path);
    const [isActive, setIsActive] = useState(firstActive);

    const nextImage = () => {
        if (isActive != 3) {
            setIsActive(isActive + 1);
            setImage(images[isActive + 1].path);
        }
    };
    const previousImage = () => {
        if (isActive != 0) {
            setIsActive(isActive - 1);
            setImage(images[isActive - 1].path);
        }
    };


    return (
        <>
            <ModalContainer>
                <ImageWrapper>
                    <CloseModal onClick={() => setShowModal(false)} />
                    <ModalImageContainer>
                        <SliderButton next={nextImage} previous={previousImage} />
                        <ModalImage src={image} alt={images[0].alt} />
                    </ModalImageContainer>
                    <ModalThumbnailContainer>
                        {
                            images
                                .map(
                                    (image, index) => (
                                        <ModalThumbnail
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
                                        </ModalThumbnail>
                                    ))
                        }
                    </ModalThumbnailContainer>
                </ImageWrapper>
            </ModalContainer>
        </>
    )
}
