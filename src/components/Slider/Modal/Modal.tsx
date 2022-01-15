import React from 'react'
import { images } from '../images'
import { CloseModal, ImageWrapper, ModalContainer, ModalImage, ModalImageContainer } from './ModalStyle'

interface ModalProps {
    setShowModal: Function;
    image: string;
};

export const Modal: React.FC<ModalProps> = ({ setShowModal, image }) => {
    return (
        <>
            <ModalContainer>
                <ImageWrapper>
                    <CloseModal onClick={() => setShowModal(false)} />
                    <ModalImageContainer>
                        <ModalImage src={image} alt={images[0].alt} />
                    </ModalImageContainer>
                </ImageWrapper>
            </ModalContainer>
        </>
    )
}
