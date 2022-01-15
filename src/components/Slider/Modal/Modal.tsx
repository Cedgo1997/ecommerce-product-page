import React, { useState } from 'react'
import { images } from '../images'
import { CloseModal, ImageWrapper, ModalContainer, ModalImage, ModalImageContainer, ModalThumbnail, ModalThumbnailContainer } from './ModalStyle'

interface ModalProps {
    setShowModal: Function;
    firstActive: number;
};

export const Modal: React.FC<ModalProps> = ({ setShowModal, firstActive }) => {

    const [image, setImage] = useState(images[firstActive].path);
    const [isActive, setIsActive] = useState(firstActive);

    return (
        <>
            <ModalContainer>
                <ImageWrapper>
                    <CloseModal onClick={() => setShowModal(false)} />
                    <ModalImageContainer>
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
